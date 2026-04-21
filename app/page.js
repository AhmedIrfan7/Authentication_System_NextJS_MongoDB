import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome</h1>
      <p>Authentication System with Next.js and MongoDB</p>
      <div className="links">
        <Link href="/signup">Signup</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
