import Translation from "@/components/Translation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-fit w-full flex flex-col items-center gap-12 mb-24">
      <div className="flex flex-col relative items-center justify-center">
        <Image
          src="/chm_kermo.png"
          alt="ChM Kermo"
          height={1125}
          width={1125}
          quality={100}
          className="z-10 h-64 md:h-80 lg:h-96 w-auto absolute"
        />

        <Image
          src="/background.jpg"
          alt="Photo of Sailboat"
          height={1496}
          width={2962}
          quality={100}
          className="h-[36rem] md:h-[40rem] lg:h-[45rem] object-cover relative brightness-90"
        />
      </div>
      <div className="flex flex-col p-8 gap-8 text-center">
        <h1 className="text-5xl">
          <Translation translationKey="home_greeting" />
        </h1>
        <p className="text-3xl mb-12 ">
          <Translation translationKey="home_title" />
        </p>
      </div>
    </main>
  );
}
