import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY);

  const returnUrl = "https://apex-learning-two.vercel.app/";
  const {customerId} = await req.json();

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  return NextResponse.json(portalSession);
}
