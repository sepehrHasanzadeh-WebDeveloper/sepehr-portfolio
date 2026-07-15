"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const image = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <div className="container">
      <section className={styles.hero} id="home">
        <motion.div
          className={styles.left}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={item}>
            Hi, I&apos;m{" "}
            <motion.span
              animate={{
                textShadow: [
                  "0 0 8px rgba(120,119,255,.4)",
                  "0 0 22px rgba(120,119,255,.8)",
                  "0 0 8px rgba(120,119,255,.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Sepehr
            </motion.span>
          </motion.h1>

          <motion.h2 variants={item}>Full Stack Developer</motion.h2>

          <motion.p variants={item} className={styles.desc}>
            I build modern, responsive web applications using React, Next.js and
            Node.js. Focused on clean UI, performance, and smooth user
            experience.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <motion.a
              href="/SepehrHasanZadehResume.pdf"
              className={styles.resume}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              download
            >
              Download Resume
            </motion.a>

            <div className={styles.socials}>
              <motion.a
                href="https://github.com/sepehrHasanzadeh-WebDeveloper"
                whileHover={{ scale: 1.2, rotate: -8, y: -3 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://t.me/Sepehr_hasanzadehh"
                whileHover={{ scale: 1.2, rotate: 8, y: -3 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={image}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className={styles.avatarWrapper}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/my-img.jpg"
              alt="Sepehr"
              width={400}
              height={400}
              className={styles.avatar}
              loading="eager"
              priority
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
