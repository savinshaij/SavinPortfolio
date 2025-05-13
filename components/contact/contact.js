"use client";
import React, { useRef, useState, useEffect } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Reveal from "../textUi/Reveal";

export default function ContactPage() {
  const [notifications, setNotifications] = useState([]);
  const form = useRef();

  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setNotifications((prev) => [waitNoti(), ...prev]);

    emailjs
      .sendForm(
        "service_akw8nzq",
        "template_p2wt9yf",
        form.current,
        "g88IRx7wxk0smNG-v"
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotifications((prev) => [successNoti(), ...prev]);
        },
        (error) => {
          console.log(error.text);
          setNotifications((prev) => [failNoti(), ...prev]);
        }
      );
  };

  return (
    <div className="w-full h-full px-4 md:px-8" id="contact">
      {/* Notifications */}
      <div className="fixed top-2 right-2 z-50 pointer-events-none">
        <div className="flex flex-col gap-2 w-72">
          <AnimatePresence>
            {notifications.map((n) => (
              <Notification removeNotif={removeNotif} {...n} key={n.id} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: false }}
      >
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 w-full">
          <Reveal>
            <h1
              style={{ fontFamily: "Transcity" }}
              className="py-4 text-center md:text-left bg-gradient-to-b bg-clip-text text-transparent md:text-8xl text-6xl font-semibold leading-none from-white to-slate-900/10"
            >
              My Contact
            </h1>
          </Reveal>
          <p className="text-lg text-center md:text-left text-[#ffffff56] font-light mt-4">
            Feel free to reach out if you'd like to collaborate, discuss an
            opportunity, or just say hello. I am always excited to connect with
            like-minded individuals and explore new ideas!
          </p>
          <div className="mt-8 w-full bg-[#fff] text-center rounded-3xl p-6 hover:bg-[#F0BB78] transition-all duration-500">
            <p className="text-lg text-black">My Email</p>
            <h2 className="md:text-3xl sm:text-2xl text-xl py-4 text-black font-semibold">
              savinshaij19@gmail.com
            </h2>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=savinshaij19@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-2 px-6 w-full rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all">
                Email Me
              </button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full">
          <motion.div className="w-full max-w-xl mx-auto bg-[#ffffff17] border border-[#ffffff2d] p-6 py-10 rounded-xl shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F0BB78] text-center mb-6">
              Send a Message
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 text-white"
            >
              <div>
                <label htmlFor="from_name" className="block text-lg font-light">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full mt-2 p-3 bg-[#dee9e121] border border-[#fff7] rounded-lg focus:ring"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-lg font-light">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full mt-2 p-3 bg-[#dee9e121] border border-[#fff7] rounded-lg focus:ring"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-light">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full mt-2 p-3 bg-[#dee9e121] border border-[#fff7] rounded-lg focus:ring"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="w-full py-3 bg-white text-black rounded-xl hover:bg-[#2c2c2c] hover:text-white transition-all"
                />
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-3 flex items-start rounded gap-2 text-sm font-medium shadow-lg bg-white pointer-events-auto"
    >
      <FiCheckSquare className="mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

const waitNoti = () => ({
  id: Math.random(),
  text: "Wait, your message is sending...",
});

const successNoti = () => ({
  id: Math.random(),
  text: "Your message was sent successfully!",
});

const failNoti = () => ({
  id: Math.random(),
  text: "Failed to send your message. Please try contacting via email.",
});