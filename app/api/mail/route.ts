import { NextRequest, NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";
import { Mailer } from "@/lib/email";
import { WaitList } from "@/models";

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

    const result = await WaitList.create({
      email,
    });

    console.log(">>>", result);

    // const mailBody = {
    //   id: uuidv4(),
    //   email,
    //   submittedAt: new Date().toISOString(),
    // };

    // const res = await fetch("https://sheetdb.io/api/v1/2l1eaegq5a0l6", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(mailBody),
    // });

    // if (!res.ok) {
    //   throw new Error(`Failed to add data: ${res.statusText}`);
    // }

    // const data = await res.json();

    const mailer = new Mailer();
    const response = await mailer.sendEmail({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thank You For joining our wait list",
      template: "wait-list",
      context: {
        email,
      },
      cc: "support@ticketeur.com",
    });

    if (response.error) {
      return NextResponse.json({ error: response.error.message }, { status: 400 });
    }

    console.log(">>> resend response", response);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
