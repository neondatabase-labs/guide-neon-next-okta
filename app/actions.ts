"use server";

import { auth } from "@/auth";
import { UserMessages } from "./db/schema";
import { db } from "./db";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export async function createUserMessage(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("User not authenticated");

  const message = formData.get("message") as string;
  await db.insert(UserMessages).values({
    user_id: session.user?.id as string,
    message,
  });

  redirect("/");
}

export async function deleteUserMessage() {
  const session = await auth();
  if (!session) throw new Error("User not authenticated");

  await db
    .delete(UserMessages)
    .where(eq(UserMessages.user_id, session.user?.id as string));
  redirect("/");
}
