"use client";
import Image from "next/image";
import styles from "./About.module.css";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

const leftCard = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCard = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const stackItem = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <div className="container">
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.h1>

      <motion.section
        className={styles.about}
        id="about"
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.leftCard} variants={leftCard}>
          <motion.div
            className={styles.avatarBox}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/my-img.jpg"
              alt="Sepehr"
              width={260}
              height={260}
              className={styles.avatar}
            />
          </motion.div>

          <motion.span
            className={styles.status_me}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            available for work
          </motion.span>

          <motion.div className={styles.contact}>
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/sepehrHasanzadeh-WebDeveloper",
              },
              { icon: <FaTelegram />, link: "https://t.me/Sepehr_hasanzadehh" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sepehr-hasanzadeh-773267351/" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ scale: 1.2, y: -3, rotate: i === 1 ? 6 : -6 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className={styles.right} variants={rightCard}>
          <motion.div className={styles.glassBox} variants={fadeUp}>
            <p>
              I am Sepehr, a Full Stack Developer focused on building modern web
              applications using React and Next.js.
            </p>
            <br />
            <p>
              I enjoy creating clean UI, scalable frontend architecture, and
              smooth user experiences.
            </p>
          </motion.div>

          <motion.div className={styles.glassBox} variants={fadeUp}>
            <h3>My Stack:</h3>

            <div className={styles.stackGrid}>
              {[
                { src: "/images/react.svg", name: "React" },
                { src: "/images/next.svg", name: "Next.js" },
                { src: "/images/node.svg", name: "Node.js" },
                { src: "/images/mongo.svg", name: "MongoDB" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.stackItem}
                  variants={stackItem}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                  }}
                >
                  <img src={item.src} alt={item.name} />
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.glassBox} variants={fadeUp}>
            <h3>Current Focus</h3>

            <div className={styles.current_content}>
              {["Next.js", "Modern UI", "Full Stack", "Responsive Design"].map(
                (item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    ✓ {item}
                  </motion.p>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
