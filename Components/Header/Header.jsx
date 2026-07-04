"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlay_show : ""}`}
        onClick={closeMenu}
      ></div>

      <div className="container">
        <header
          className={`${styles.header_container} ${
            scrolled ? styles.scrolled : ""
          }`}
        >
          <div className={styles.head_right_box}>
            <h1>Sepehr HasanZadeh</h1>
          </div>

          <div className={styles.head_middle_box}>
            <ul>
              <Link href="#home">
                <li>Home</li>
              </Link>

              <Link href="#about">
                <li>About</li>
              </Link>

              <Link href="#projects">
                <li>Projects</li>
              </Link>
            </ul>
          </div>

          <div className={styles.head_left_box}>
            <Link href="#contact">
              <button>Contact Me</button>
            </Link>
          </div>

          <button
            className={`${styles.hamburger} ${
              menuOpen ? styles.hamburger_active : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>
      </div>

      <aside
        className={`${styles.mobile_menu} ${
          menuOpen ? styles.mobile_menu_open : ""
        }`}
      >
        <button className={styles.close_btn} onClick={closeMenu}>
          ✕
        </button>

        <nav>
          <Link href="#home" onClick={closeMenu}>
            Home
          </Link>

          <Link href="#about" onClick={closeMenu}>
            About
          </Link>

          <Link href="#projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link href="#contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}
