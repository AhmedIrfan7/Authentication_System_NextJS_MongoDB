"use client";

import { useState } from "react";
import Link from "next/link";
import { loginAction } from "../actions/auth";
import Footer from "../components/Footer";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    setLoading(true);
    setError("");
    const result = await loginAction(formData);
    if (result && result.error) {
      setError(result.error);
    }
    setLoading(false);
  }

  return (
    <div className="page-wrap">
      <div className="auth-box">
        <h1>Login</h1>
        <form action={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          Don&apos;t have an account? <Link href="/signup">Signup</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
