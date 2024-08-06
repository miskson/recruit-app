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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    return NextResponse.json(
      await Profession.deleteOne(new ObjectId(params.id))
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { title, description } = body;

    let updatedProfession = await Profession.findByIdAndUpdate(
      new ObjectId(params.id),
      {
        title,
        description,
      }
    );
    await updatedProfession.save();

    return NextResponse.json(
      { message: "Profession Updated" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
