import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    img: String,
    body: String,
  },
  { timestamps: true }
);

export const Testimonial =
  mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
