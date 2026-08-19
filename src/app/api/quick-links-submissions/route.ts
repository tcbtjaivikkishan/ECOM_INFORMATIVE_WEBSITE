import clientPromise from "@/lib/mongodb";

type Submission = {
  fullName: string;
  phoneNumber: string;
  state: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | Partial<Submission>
    | null;

  const fullName = body?.fullName?.trim() ?? "";
  const phoneNumber = body?.phoneNumber?.trim() ?? "";
  const state = body?.state?.trim() ?? "";

  if (!fullName || !phoneNumber || !state) {
    return Response.json(
      { message: "Full name, phone number, and state are required." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB ?? "prod";
  const collection = client.db(dbName).collection("registered_users");

  const result = await collection.insertOne({
    fullName,
    phoneNumber,
    state,
    submittedAt: new Date(),
  });

  return Response.json({
    message: "Submission saved successfully.",
    insertedId: result.insertedId.toString(),
  });
}
