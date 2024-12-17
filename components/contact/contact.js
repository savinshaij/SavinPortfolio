"use client";
import React, { useRef, useState, useEffect } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [notifications, setNotifications] = useState([]);

    const removeNotif = (id) => {
        setNotifications((pv) => pv.filter((n) => n.id !== id));
    };
    const form = useRef();
    const [start, setStart] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setNotifications((pv) => [waitNoti(), ...pv]);

        emailjs.sendForm('service_akw8nzq', 'template_p2wt9yf', form.current, 'g88IRx7wxk0smNG-v')
            .then((result) => {
                console.log(result.text);

                setNotifications((pv) => [successNoti(), ...pv]);
            }, (error) => {
                console.log(error.text);
                setNotifications((pv) => [failNoti(), ...pv]);
            });
    };


    return (
        <div className="w-full h-full" id="contact">
            {/* Notifications */}
            <div className="bg-white flex items-center justify-center">
                <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
                    <AnimatePresence>
                        {notifications.map((n) => (
                            <Notification removeNotif={removeNotif} {...n} key={n.id} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <div className=" md:flex   justify-around ">
                {/* Left Section */}
                <div className=" py-6 md:w-1/2 w-full h-full md:flex-col justify-center items-center ">
                    <div className=" w-full h-full flex justify-center items-center">
                        <div>
                            <div className="w-full  flex justify-center items-center">
                                <h1 className=" py-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-8xl text-6xl  font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10" >My Contact</h1>
                            </div>
                            <div className=" w-full   flex justify-center items-center">

                                <div className=" md:w-2/3  w-full  bg-[#ffffff00]   md:flex flex-col  text-white md:p-6">


                                    <h2 className=" text-lg pt-4  text-[#ffffff56] font-light text-center">
                                        Feel free to reach out if you'd like to collaborate, discuss an opportunity, or just say hello.
                                        I am always excited to connect with like-minded individuals and explore new ideas!
                                    </h2>

                                    <div className=" px-6  my-5     bg-[#fff]  text-center rounded-3xl pt-9 pb-5 hover:bg-[#F0BB78] duration-1000 transition-all">
                                        <p className="text-lg text-black ">
                                            My Email
                                        </p>
                                        <h2 className=" md:text-4xl text-2xl py-4  text-black font-semibold">
                                            savinshaij19@gmail.com
                                        </h2>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=savinshaij19@gmail.com" target="_blank">
                                            <button className=" py-2  rounded-xl w-full bg-black text-white hover:bg-white hover:text-black"> Email Me</button>
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
                {/* Right Section */}
                <div className="md:w-1/2 w-full  md:px-0 md:flex items-center md:justify-start justify-center">
                    <div className="w-full  max-w-xl bg-[#ffffff17] border border-[#ffffff2d] p-6 py-10  rounded-xl shadow-lg">
                        <h2 className="md:text-5xl text-4xl w-full font-bold text-[#F0BB78]  md:py-7 py-3 md:px-10 text-center">
                            Send a Message
                        </h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-white">
                            <div className=" w-full py-2">
                                <label htmlFor="from_name" className=" text-lg  font-light">
                                    Name
                                </label>
                                <input
                                    type="text" name="from_name"
                                    className="w-full mt-1 p-2 text bg-[#dee9e121] border border-[#fff7] rounded-lg focus:ring"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="from_email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="text" name="from_email"

                                    className="w-full mt-1 p-2 text bg-[#dee9e121] border border-[#fff7]  rounded-lg focus:ring"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className=" w-full py-2">
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    type="text"
                                    className="w-full mt-1 p-2 text bg-[#dee9e121] border border-[#fff7]  rounded-lg focus:ring"
                                    placeholder="Enter your message"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>


                            <div className="relative float-label-input">
                                <input type="submit" value="Send" className=" z-auto w-full text-black  rounded-xl h-10 bg-white  hover:bg-[#2c2c2c] hover:text-white" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
            className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg bg-white pointer-events-auto"
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
