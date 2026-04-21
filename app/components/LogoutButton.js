"use client";

import { useState } from "react";
import { logoutAction } from "../actions/auth";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    await logoutAction();
  }

  return (
    <form action={handleLogout}>
      <button type="submit" className="logout-btn" disabled={loading}>
        {loading ? "Logging out..." : "Logout"}
      </button>
    </form>
  );
}
