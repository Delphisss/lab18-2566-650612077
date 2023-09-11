import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kong Kanjai",
    studentId: "650612077",
  });
};
