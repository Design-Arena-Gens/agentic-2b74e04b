import Link from "next/link";
import type { Post } from "@/content/posts";
import { formatDate } from "@/lib/formatDate";
import styles from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className={`${styles.card} glass-panel`}>
      <div className={styles.tagArea}>
        <span className="tag">{post.category}</span>
        <span className={styles.meta}>
          {formatDate(post.publishedAt)} · {post.readingTime}
        </span>
      </div>
      <h3 className={styles.title}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <Link className="btn-ghost" href={`/posts/${post.slug}`}>
        Read the vision →
      </Link>
    </article>
  );
}
