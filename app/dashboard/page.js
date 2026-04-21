import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Footer from "../components/Footer";
import LogoutButton from "../components/LogoutButton";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const userEmail = cookieStore.get("user_email");

  if (!userEmail) {
    redirect("/login");
  }

  return (
    <div className="dashboard-wrap">
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome, {userEmail.value}</p>
        <LogoutButton />
      </div>
      <Footer />
    </div>
  );
}
