"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* ═══ NAV ═══ */}
      <header className={styles.header}>
        <span className={styles.logo}>weber</span>

        <nav className={styles.nav}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>

        <div className={styles.navActions}>
          <a className={styles.btnGhost} href="#">
            Log in
          </a>
          <button className={styles.btnOutline}>Sign Up</button>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <main className={styles.main}>
        <div className={styles.badge}>
          <iconify-icon icon="lucide:gift" />
          Free credits on signup
        </div>

        <h1 className={styles.heading}>What should we build?</h1>

        {/* Input card */}
        <div className={styles.inputCard}>
          <textarea
            className={styles.textarea}
            placeholder="Describe what you need..."
            rows={4}
            aria-label="Describe what you want to build"
          />

          <div className={styles.inputFooter}>
            <div className={styles.inputActions}>
              <button className={styles.inputActionBtn} aria-label="Attach file">
                <iconify-icon icon="lucide:paperclip" />
                Attach
              </button>
              <button
                className={styles.inputActionBtn}
                aria-label="Toggle agent mode"
              >
                <iconify-icon icon="lucide:sliders-horizontal" />
                Agent Mode
              </button>
            </div>

            <button className={styles.btnGenerate} aria-label="Generate">
              Generate
              <iconify-icon icon="lucide:arrow-up" />
            </button>
          </div>
        </div>

        {/* Quick shortcuts */}
        <div className={styles.shortcuts}>
          {[
            { icon: "lucide:image", label: "From Image" },
            { icon: "lucide:figma", label: "From Figma" },
            { icon: "lucide:layout-template", label: "Wireframe" },
            { icon: "lucide:monitor", label: "Landing page" },
            { icon: "lucide:smartphone", label: "Mobile app" },
          ].map((s) => (
            <button key={s.label} className={styles.shortcutChip}>
              <iconify-icon icon={s.icon} />
              {s.label}
            </button>
          ))}
        </div>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className={styles.footer}>
        <p className={styles.footerCopy}>
          © 2025 weber. All rights reserved.
        </p>

        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#" aria-label="Twitter / X">
            <iconify-icon
              icon="lucide:twitter"
              style={{ fontSize: "14px", display: "block" }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
