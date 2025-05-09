"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ExampleWrapper = ({ onSubmitSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="border border-zinc-800 hover:bg-zinc-700 text-white bg-transparent font-light px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
      >
        Add Your Testimonial
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} onSubmitSuccess={onSubmitSuccess} />
    </div>
  );
};

const images = [
  "https://avatar.vercel.sh/jack",
  "https://avatar.vercel.sh/james",
  "https://avatar.vercel.sh/jill",
  "https://avatar.vercel.sh/john",
  "https://avatar.vercel.sh/jane",
  "https://avatar.vercel.sh/jenny",
];

const SpringModal = ({ isOpen, setIsOpen, onSubmitSuccess }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [submitted, setSubmitted] = useState(false); // Submitted state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading text
    setSubmitted(false);

    // Select a random image from the images array
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Create the new testimonial object
    const newTestimonial = { name, username, body, img: randomImage };

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTestimonial),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true); // Show "Submitted" text
        setName(""); // Clear the name input
        setUsername(""); // Clear the username input
        setBody(""); // Clear the body input

        setTimeout(() => {
          setIsOpen(false); // Close the modal after a short delay
          setSubmitted(false); // Reset submitted state
        }, 2000);

        // Trigger the callback to fetch updated data in DemoMarquee.js
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        console.error("Error submitting testimonial");
      }
    } catch (err) {
      console.error("Error submitting testimonial:", err);
    } finally {
      setLoading(false); // Hide loading text
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-zinc-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br border-gray-500 border bg-zinc-900 text-white p-6 rounded-2xl w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative pt-10 z-10">
              <h3 className="md:text-3xl text-xl font-bold text-center mb-2">Add Testimonial</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mt-2 border border-zinc-700 rounded bg-zinc-900 text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-white">
                    Your Profession
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mt-2 rounded border border-zinc-700 bg-zinc-900 text-white focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="body" className="block text-white">
                    Testimonial
                  </label>
                  <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full p-2 mt-2 rounded  border border-zinc-700 bg-zinc-900 text-white focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                  >
                    {loading ? "Submitting..." : submitted ? "Submitted!" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;