import { routeData } from "@/data/routeData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div
          className="
            grid 
            gap-4 
            p-6 
            bg-gray-900 
            rounded-2xl 
            shadow-lg 
            md:grid-cols-2 
            grid-cols-1
          "
        >
          {routeData.map((box) => (
            <Link
              key={box.id}
              href={box.href}
              className="
                bg-gray-800 
                rounded-xl 
                flex 
                items-center 
                justify-center 
                text-white 
                text-lg 
                shadow-md 
                hover:bg-gray-700 
                transition
                p-4
              "
            >
              {box.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}