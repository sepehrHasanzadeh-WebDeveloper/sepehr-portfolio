"use client";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const section = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const left = {
  hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const right = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Contact() {
  return (
    <motion.section
      className={styles.contact}
      id="contact"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={styles.blurLeft}></div>
      <div className={styles.blurRight}></div>

      <div className={styles.container}>
        <motion.div className={styles.left} variants={left}>
          <motion.span className={styles.subtitle}>CONTACT</motion.span>

          <motion.h2>
            Get In
            <br />
            Touch
          </motion.h2>
        </motion.div>

        <motion.div className={styles.right} variants={right}>
          <motion.div
            className={styles.item}
            variants={item}
            whileHover={{ scale: 1.03, x: 5 }}
          >
            <span>Location</span>
            <p>Iran, Tehran</p>
          </motion.div>

          <motion.a
            href="mailto:sepehrh471@gmail.com"
              target="_blank"
                rel="noopener noreferrer"
            className={styles.item}
            variants={item}
            whileHover={{
              scale: 1.03,
              x: 6,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Email</span>

            <div className={styles.link}>
              <FaEnvelope />
              <p>sepehrh471@gmail.com</p>
              <HiArrowUpRight />
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/sepehrHasanzadeh-WebDeveloper"
              target="_blank"
                rel="noopener noreferrer"
            className={styles.item}
            variants={item}
            whileHover={{
              scale: 1.03,
              x: 6,
            }}
          >
            <span>GitHub</span>

            <div className={styles.link}>
              <FaGithub />
              <p>https://github.com/sepehr_dev</p>
              <HiArrowUpRight />
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sepehr-hasanzadeh-773267351/"
              target="_blank"
                rel="noopener noreferrer"
            className={styles.item}
            variants={item}
            whileHover={{
              scale: 1.03,
              x: 6,
            }}
          >
            <span>LinkedIn</span>

            <div className={styles.link}>
              <FaLinkedin />
              <p>linkedin.com/in/sepehr_dev</p>
              <HiArrowUpRight />
            </div>
          </motion.a>

          <motion.div
            className={styles.item}
            variants={item}
            animate={{
              boxShadow: [
                "0 0 0px rgba(120,119,255,0)",
                "0 0 18px rgba(120,119,255,0.25)",
                "0 0 0px rgba(120,119,255,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <span>Status</span>

            <div className={styles.status}>
              <span className={styles.dot}></span>
              Available for Work
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
