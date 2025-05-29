import { NextRequest, NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";
import { Mailer } from "@/lib/email";
import { WaitList } from "@/models";
/* eslint-disable  @typescript-eslint/no-explicit-any */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // 🧠 critical fix here
    const email = body?.email as string;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const count = await WaitList.countDocuments({ email });

    if (count > 0) {
      return NextResponse.json(
        { error: "Email has been previously used" },
        { status: 400 }
      );
    }

    const result = await WaitList.findOneAndUpdate(
      {
        email,
      },
      {
        $set: {
          email,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    console.log(">>>result", result);

    const mailer = new Mailer();
    console.log(">>>mailer", mailer);
    const response = await mailer.sendEmail({
      from: "Ticketueur <noreply@mail.useticketeur.com>",
      to: email,
      subject: "Thank You For joining our wait list",
      template: "wait-list",
      context: {
        email,
      },
      cc: "support@useticketeur.com",
    });

    console.log(">>>response", response);

    if (response.error) {
      return NextResponse.json(response, { status: 400 });
    }

    // console.log(">>> resend response", response);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    console.error("Proxy Error:", error);
    const message =
      error?.message ??
      error?.toString?.() ??
      "Something went wrong on the server";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
