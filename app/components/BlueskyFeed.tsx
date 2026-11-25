"use client";
import { useEffect, useState } from "react";
import content from "../../public/content.json";

type FeedImage = { url: string; alt: string };

type FeedPost = {
  id: string;
  text: string;
  createdAt: string;
  likes: number;
  reposts: number;
  images: FeedImage[];
  url: string;
};

type FeedState =
  | { status: "loading" }
  | { status: "ready"; posts: FeedPost[] }
  | { status: "error" };

const API_URL = "https://api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed";
const POST_LIMIT = 8;
const ROTATE_MS = 8000;

function parseCount(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function parseImages(embed: unknown): FeedImage[] {
  if (embed === null || typeof embed !== "object" || !("images" in embed)) return [];
  if (!Array.isArray(embed.images)) return [];
  const images: FeedImage[] = [];
  for (const raw of embed.images) {
    if (raw === null || typeof raw !== "object") continue;
    if (!("thumb" in raw) || !("fullsize" in raw) || !("alt" in raw)) continue;
    if (typeof raw.fullsize !== "string") continue;
    const thumb = typeof raw.thumb === "string" ? raw.thumb : "";
    const alt = typeof raw.alt === "string" ? raw.alt : "";
    images.push({ url: thumb !== "" ? thumb : raw.fullsize, alt });
  }
  return images;
}

function parsePost(item: unknown, handle: string): FeedPost | null {
  if (item === null || typeof item !== "object" || !("post" in item)) return null;
  const post = item.post;
  if (
    post === null || typeof post !== "object" ||
    !("record" in post) || !("uri" in post) ||
    !("likeCount" in post) || !("repostCount" in post) || !("embed" in post)
  ) {
    return null;
  }
  const record = post.record;
  if (
    record === null || typeof record !== "object" ||
    !("text" in record) || !("createdAt" in record)
  ) {
    return null;
  }
  if (typeof record.text !== "string") return null;
  if (typeof record.createdAt !== "string") return null;
  if (typeof post.uri !== "string") return null;
  const id = post.uri.split("/").pop();
  if (id === undefined || id === "") return null;
  return {
    id,
    text: record.text,
    createdAt: record.createdAt,
    likes: parseCount(post.likeCount),
    reposts: parseCount(post.repostCount),
    images: parseImages(post.embed),
    url: `https://bsky.app/profile/${handle}/post/${id}`,
  };
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function BlueskyFeed() {
  const feed = content.blueskyFeed;
  const handle = content.social.bluesky.handle.replace(/^@/, "");
  const profileUrl = content.social.bluesky.url;
  const [state, setState] = useState<FeedState>({ status: "loading" });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const posts = state.status === "ready" ? state.posts : [];
  const current = posts[index];

  useEffect(() => {
    let cancelled = false;
    const url =
      `${API_URL}?actor=${encodeURIComponent(handle)}` +
      `&limit=${POST_LIMIT}&filter=posts_no_replies`;
    fetch(url)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))
      )
      .then((data: unknown) => {
        if (cancelled) return;
        if (
          data === null || typeof data !== "object" ||
          !("feed" in data) || !Array.isArray(data.feed)
        ) {
          setState({ status: "error" });
          return;
        }
        const parsed = data.feed
          .map((item) => parsePost(item, handle))
          .filter((post): post is FeedPost => post !== null);
        setState(
          parsed.length > 0 ? { status: "ready", posts: parsed } : { status: "error" }
        );
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, [handle]);

  useEffect(() => {
    if (paused || posts.length < 2) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % posts.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused, posts]);

  const prev = () => setIndex((i) => (i - 1 + posts.length) % posts.length);
  const next = () => setIndex((i) => (i + 1) % posts.length);

  return (
    <div id="bluesky">
      <div className="max-w-3xl mx-auto">

        {state.status === "loading" && (
          <div
            className="pixel-border card-shadow rounded-lg p-8 text-center text-sm"
            style={{ background: "var(--bg-card)", color: "var(--text-secondary)" }}
          >
            Loading posts…
          </div>
        )}

        {state.status === "error" && (
          <div
            className="pixel-border card-shadow rounded-lg p-8 text-center"
            style={{ background: "var(--bg-card)" }}
          >
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {feed.errorText}
            </p>
          </div>
        )}

        {current && (
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="pixel-border card-shadow rounded-lg overflow-hidden"
              style={{ background: "var(--bg-card)" }}
            >
              <a href={current.url} target="_blank" rel="noopener noreferrer" className="block">
                {current.images.length > 0 && (
                  <img
                    src={current.images[0].url}
                    alt={current.images[0].alt !== "" ? current.images[0].alt : "Photo from our latest post"}
                    className="w-full max-h-80 object-cover"
                  />
                )}
                <div className="p-6">
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {current.text}
                  </p>
                  <div
                    className="flex items-center gap-4 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span>{formatDate(current.createdAt)}</span>
                    <span>♥ {current.likes}</span>
                    <span>↻ {current.reposts}</span>
                    <span className="ml-auto">View on Bluesky →</span>
                  </div>
                </div>
              </a>
            </div>

            {posts.length > 1 && (
              <>
                <button
                  aria-label="Previous post"
                  onClick={prev}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl cursor-pointer z-10"
                  style={{ background: "rgba(123, 78, 160, 0.85)" }}
                >
                  ‹
                </button>
                <button
                  aria-label="Next post"
                  onClick={next}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl cursor-pointer z-10"
                  style={{ background: "rgba(123, 78, 160, 0.85)" }}
                >
                  ›
                </button>
                <div className="flex justify-center gap-2 mt-4">
                  {posts.map((post, i) => (
                    <button
                      key={post.id}
                      aria-label={`Go to post ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className="w-3 h-3 rounded-full cursor-pointer"
                      style={{
                        background: i === index ? "#7b4ea0" : "var(--border-color)",
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
