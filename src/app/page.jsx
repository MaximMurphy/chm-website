import Translation from "@/components/Translation";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />

      <main className="h-fit w-full flex flex-col items-center gap-12 mb-24">
        <Image
          src="/2023_rada.jpeg"
          alt="Chornomortsi at Rada 2023"
          height={1496}
          width={2962}
          quality={100}
          className="object-fill"
        />
        <h1 className="text-5xl">
          <Translation translationKey="home_greeting" />
        </h1>

        <p className="text-3xl mb-12">
          <Translation translationKey="home_title" />
        </p>
      </main>
    </div>
  );
}
