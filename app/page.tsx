import Link from "next/link";
import ProductCard from "./conponents/ProductCard";
import { auth } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link className="btn btn-link " href="/users">
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
