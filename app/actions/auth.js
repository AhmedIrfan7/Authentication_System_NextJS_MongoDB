"use server";

import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";

export async function signupAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password required" };
  }

  await connectDB();

  const existing = await User.findOne({ email: email });
  if (existing) {
    return { error: "Email already registered" };
  }

  const hashed = await bcrypt.hash(password, 10);

  await User.create({ email: email, password: hashed });

  redirect("/login");
}

export async function loginAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password required" };
  }

  await connectDB();

  const user = await User.findOne({ email: email });
  if (!user) {
    return { error: "Invalid email or password" };
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return { error: "Invalid email or password" };
  }

  const cookieStore = await cookies();
  cookieStore.set("user_email", user.email, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.set("user_email", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  cookieStore.delete("user_email");
  redirect("/login");
}
