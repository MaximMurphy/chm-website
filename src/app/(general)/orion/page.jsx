import Translation from "@/components/Translation";
import Image from "next/image";

export default function orion() {
  return (
    <section className="bg-slate-900 h-full w-full flex flex-col items-center px-8 py-16 md:p-8 lg:p-12 gap-12">
      <h1 className="text-5xl text-center">
        <Translation translationKey="orion_title" />
      </h1>
      <Image
        src="/chm_orion.jpg"
        alt="Orion"
        height={480}
        width={360}
        quality={100}
        className="w-auto h-64 md:h-72 lg:h-80"
      />
      <div className="flex flex-col items-center lg:px-64 gap-8">
        <div className="text-lg">
          <Translation translationKey="orion_p1" />
        </div>
        <div className="text-lg">
          <Translation translationKey="orion_p2" />
        </div>
        <div className="text-lg">
          <Translation translationKey="orion_p3" />
        </div>
        <div className="text-lg">
          <Translation translationKey="orion_p4" />
        </div>
      </div>
    </section>
  );
}
