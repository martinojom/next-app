// import Link from "next/link";
// import ProductCard from "./conponents/ProductCard";
// import { auth } from "./api/auth/[...nextauth]/route";

import Image from "next/image";
import gameWoman from "@/public/images/wallpaperflare.com_wallpaper.jpg";

// export default async function Home() {
//   const session = await auth();

//   return (
//     <main>
//       <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
//       <Link className="btn btn-link " href="/users">
//         Users
//       </Link>
//       <ProductCard />
//     </main>
//   );
// }

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src={gameWoman}
        alt="game woman"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
