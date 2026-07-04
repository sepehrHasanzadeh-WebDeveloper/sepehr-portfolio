"use client";
import Image from "next/image";
import styles from "./Projects.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

const section = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const title = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
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

const bestCard = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <div className="container">
      <motion.h1
        style={{ marginBottom: "50px" }}
        className="text-center text-white text-4xl"
        variants={title}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        My Projects
      </motion.h1>

      <motion.section
        className={styles.Projects}
        variants={section}
        id="projects"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className={styles.card_project}
          variants={card}
          whileHover={{
            y: -10,
            rotateX: 5,
            rotateY: -5,
            scale: 1.02,
          }}
        >
          <div className={styles.card_project_head}>
            <Image
              src={"/images/gamespot.png"}
              alt="GameSpot project"
              width={300}
              height={300}
            />
          </div>

          <div className={styles.card_project_body}>
            <span className={styles.tag_green}>GameSpot</span>

            <p>
              A full-stack gaming store with product management, shopping cart,
              and secure authentication
            </p>

            <div className={styles.badge_sec}>
              <span>Node Js</span>
              <span>React</span>
              <span>MongoDB</span>
            </div>

            <div className={styles.btn_view_sec}>
              <Link href="https://github.com/sepehrHasanzadeh-WebDeveloper/GameSpot">
                <button className={styles.github_btn}>
                  Git Hub <IoLogoGithub />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.card_best_project}
          variants={bestCard}
          whileHover={{
            y: -14,
            scale: 1.03,
            rotateX: 6,
            rotateY: 6,
          }}
        >
          <div className={styles.card_project_head}>
            <Image
              src={"/images/frontlearn.png"}
              alt="FrontLearn project"
              width={300}
              height={300}
            />
          </div>

          <div className={styles.card_project_body}>
            <span className={styles.tag_purple}>Front Learn</span>

            <p>
              A modern full-stack learning platform built with Next.js.
              Responsive UI, authentication, scalable architecture.
            </p>

            <div className={styles.badge_sec}>
              <span>Next</span>
              <span>Tailwind</span>
              <span>Full Stack</span>
            </div>

            <div className={styles.btn_view_sec}>
              <Link href="https://github.com/sepehrHasanzadeh-WebDeveloper/Front-Learn">
                <button className={styles.github_btn}>
                  Git Hub <IoLogoGithub />
                </button>
              </Link>

              <Link href="https://front-learn-omega.vercel.app/">
                <button className={styles.demo_btn}>
                  Live Demo <FaCirclePlay />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.card_project}
          variants={card}
          whileHover={{
            y: -10,
            rotateX: -5,
            rotateY: 5,
            scale: 1.02,
          }}
        >
          <div className={styles.card_project_head}>
            <Image
              src={"/images/digimax.png"}
              alt="Digimax project"
              width={300}
              height={300}
            />
          </div>

          <div className={styles.card_project_body}>
            <span className={styles.tag_orange}>Digimax</span>

            <p>
              A full-stack e-commerce application built with React, Node.js, and
              MongoDB with modern UI.
            </p>

            <div className={styles.badge_sec}>
              <span>Node Js</span>
              <span>React</span>
              <span>MongoDB</span>
            </div>

            <div className={styles.btn_view_sec}>
              <Link href="https://github.com/sepehrHasanzadeh-WebDeveloper/DigiMax">
                <button className={styles.github_btn}>
                  Git Hub <IoLogoGithub />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
