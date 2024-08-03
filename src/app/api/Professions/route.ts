import Profession from "@/app/(models)/Profession";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const professionData = body.formData;
    await Profession.create(professionData);
    return NextResponse.json({ message: "Profession added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json(await Profession.find().exec());
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
