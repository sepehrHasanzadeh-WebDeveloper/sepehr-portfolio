"use client";
import { useState } from "react";
import styles from "./ContactFromSec.module.css";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
export default function ContactFromSec() {
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const getFormDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (formData.message.length < 20) {
      toast.error("Message is too short");
      return;
    }
      setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      );
      toast.success("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error("Message could not be sent");
      
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.contactSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Send Me a Message</h2>

        <p>
          Have a project in mind or want to discuss an opportunity? Fill out the
          form below and I'll get back to you as soon as possible.
        </p>

        <form className={styles.form}  onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name *"
              value={formData.name}
              onChange={getFormDataHandler}
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address *"
              value={formData.email}
              onChange={getFormDataHandler}
            />
          </div>

          <input
            type="text"
            name="subject"
            required
            placeholder="subject *"
            value={formData.subject}
            onChange={getFormDataHandler}
          />

          <textarea
            rows="7"
            name="message"
            placeholder="Write your message... * "
            required
            minLength={20}
            value={formData.message}
            onChange={getFormDataHandler}
          ></textarea>

          <button  type="submit" disabled={loading}>
            {loading ? "Sending Message ... " : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
