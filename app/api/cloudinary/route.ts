import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { folder } = await req.json();

  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = crypto
    .createHash("sha1")
    .update(
      `folder=${folder}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`
    )
    .digest("hex");

  return NextResponse.json({
    timestamp,
    signature,
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  });
}
