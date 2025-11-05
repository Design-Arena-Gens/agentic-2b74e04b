import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/content/posts";
import styles from "./page.module.css";

const featured = posts[0];

export default function HomePage() {
  return (
    <main>
      <section className={`${styles.hero} container`}>
        <div className={`${styles.panel} glass-panel`}>
          <span className="tag">Baba Vanga Blog</span>
          <h1 className={styles.heroTitle}>
            Prophetic storytelling for the futures we are crafting now.
          </h1>
          <p className={styles.heroText}>
            Wander through speculative essays, climate meditations, and techno-mystic
            reflections—each inspired by the legendary seer Baba Vanga. Every post blends
            research, folklore, and experiential design to help you feel tomorrow.
          </p>
          <div className={styles.ctaRow}>
            <Link className="btn-ghost" href={`/posts/${featured.slug}`}>
              Read featured vision
            </Link>
            <Link className="btn-ghost" href="#library">
              Browse the library
            </Link>
          </div>
        </div>
        <div className={`${styles.visual} ${styles.panel} glass-panel`}>
          <div className={styles.orb} />
          <div className={styles.constellation}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.heroCaption}>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <Link href={`/posts/${featured.slug}`}>Dive into the prophecy →</Link>
          </div>
        </div>
      </section>

      <section id="library" className={`${styles.library} container`}>
        <header className={styles.libraryHeader}>
          <h2 className={styles.libraryTitle}>Latest transmissions</h2>
          <p className={styles.libraryText}>
            Each entry is a narrative experiment, translating Baba Vanga&apos;s oral
            histories into immersive futurescaping for today&apos;s dreamers, builders,
            and listeners.
          </p>
        </header>
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
      </section>

      <section className={`${styles.newsletter} container`}>
        <div className={`${styles.newsletterCard} glass-panel`}>
          <div>
            <span className="tag">Inner Circle Dispatch</span>
            <h2>Receive moon-cycle letters from the Oracle Desk.</h2>
            <p>
              A monthly digest of slow prophecy, ritual design prompts, and climate
              listening practices delivered every full moon.
            </p>
          </div>
          <form className={styles.form} action="https://formspree.io/f/maylqzye" method="POST">
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <div className={styles.inputRow}>
              <input
                className={styles.input}
                id="email"
                name="email"
                type="email"
                placeholder="you@starseed.network"
                required
                autoComplete="email"
              />
              <button className={styles.submit} type="submit">
                Join the circle
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="container">
        <div className={`${styles.footer} glass-panel`}>
          <p>© {new Date().getFullYear()} Baba Vanga Chronicles. Crafted for future sense-makers.</p>
          <nav>
            <Link href="/">Home</Link>
            <Link href="#library">Library</Link>
            <Link href="https://en.wikipedia.org/wiki/Baba_Vanga" target="_blank">
              About Vanga
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
