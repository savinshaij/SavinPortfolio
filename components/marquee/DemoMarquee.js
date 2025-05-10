"use client";

import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Marquee } from "./Marquee";
import ExampleWrapper from "../model/TestimonialForm"; // Ensure this is exported correctly
import Reveal from "../textUi/Reveal";

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-white text-sm">{body}</blockquote>
    </figure>
  );
};

function MarqueeDemo() {
  const [reviews, setReviews] = useState([]);
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      if (data.success) {
        setReviews(data.testimonials);
      } else {
        console.error("Failed to fetch testimonials:", data.message);
      }
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Reveal>
        <h1
          style={{ fontFamily: "Transcity" }}
          className="md:mb-36 mb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center md:text-8xl text-6xl font-semibold leading-none text-transparent from-[#fff] to-slate-900/10"
        >
          Testimonials
        </h1>
      </Reveal>

      {/* Conditionally render reviews or fallback message */}
      {reviews.length > 0 ? (
        <>
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review._id} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review._id} {...review} />
            ))}
          </Marquee>
        </>
      ) : (
        <p className="md:text-3xl text-center text-zinc-400 font-light mt-10">
          No reviews yet. Be the first to leave a testimonial!
        </p>
      )}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-900 to-transparent" />
      <div className="flex flex-col md:flex-row my-20 mb-40 gap-7 text-center justify-center items-center">
        <p className="text-xl px-9 text-zinc-500 font-light">
          If you found my work impressive, feel free to leave a testimonial
        </p>
        <ExampleWrapper onSubmitSuccess={fetchTestimonials} />
      </div>
    </div>
  );
}

export default MarqueeDemo;