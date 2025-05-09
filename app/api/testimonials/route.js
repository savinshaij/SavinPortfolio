import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { Testimonial } from "../../../lib/models/testimonial";

export async function GET() {
  await connectDB();
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, testimonials });
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newTestimonial = await Testimonial.create(data);
  return NextResponse.json({ success: true, testimonial: newTestimonial });
}
