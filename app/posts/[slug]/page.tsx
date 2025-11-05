import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/content/posts";
import { formatDate } from "@/lib/formatDate";
import styles from "./page.module.css";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Vision not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function PostPage({ params }: { params: Params }) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={`container ${styles.page}`}>
      <Link href="/" className={`btn-ghost ${styles.back}`}>
        ← Back to visions
      </Link>
      <article className={`glass-panel ${styles.article}`}>
        <header>
          <span className="tag">{post.category}</span>
          <h1 className={styles.heading}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{formatDate(post.publishedAt)}</span>
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
        </header>

        {post.highlight && (
          <blockquote className={styles.blockquote}>
            <p>{post.highlight.quote}</p>
            <cite className={styles.cite}>— {post.highlight.source}</cite>
          </blockquote>
        )}

        <div className="prose">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 16)}>{paragraph}</p>
          ))}
        </div>

        {post.timeline && (
          <section className={styles.timeline}>
            <h2 className={styles.timelineTitle}>Forecast timeline</h2>
            <ul className={styles.timelineList}>
              {post.timeline.map((event) => (
                <li key={event.year} className={styles.timelineItem}>
                  <div className={styles.year}>{event.year}</div>
                  <div className={styles.details}>
                    <h3>{event.headline}</h3>
                    <p>{event.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}
