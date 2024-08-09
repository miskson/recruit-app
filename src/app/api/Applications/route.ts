import Application from "@/app/(models)/Applications";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const applicationData = body.formData;
    await Application.create(applicationData);
    return NextResponse.json({ message: "Application added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json(await Application.find().exec());
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
