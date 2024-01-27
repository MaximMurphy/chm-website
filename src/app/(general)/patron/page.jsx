import Translation from "@/components/Translation";
import Image from "next/image";

export default function patron() {
  return (
    <section className="bg-slate-900 h-full w-full flex flex-col items-center px-8 py-16 md:p-8 lg:p-12 gap-12">
      <h1 className="text-5xl text-center">
        <Translation translationKey="patron_title" />
      </h1>
      <Image
        src="/chm_mykolai.jpg"
        alt="Sviatiy Mykolai"
        height={4153}
        width={3088}
        quality={75}
        className="w-auto h-64 md:h-72 lg:h-80"
      />
      <div className="flex flex-col items-center lg:px-64 gap-8">
        <div className="text-lg">
          <Translation translationKey="patron_p1" />
        </div>
        <div className="text-lg">
          <Translation translationKey="patron_p2" />
        </div>
        <div className="text-lg">
          <Translation translationKey="patron_p3" />
        </div>
      </div>
    </section>
  );
}
