import { ObjectId } from "mongodb";
import Profession from "@/app/(models)/Profession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    return NextResponse.json(await Profession.findOne(new ObjectId(params.id)));
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
