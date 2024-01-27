import Translation from "@/components/Translation";
import Image from "next/image";

export default function emblem() {
  return (
    <section className="bg-slate-900 h-full w-full flex flex-col items-center px-8 py-16 md:p-8 lg:p-12 gap-12">
      <h1 className="text-5xl text-center">
        <Translation translationKey="emblem_title" />
      </h1>
      <Image
        src="/chm_vidznaka.jpg"
        alt="ChM Emblem"
        height={276}
        width={512}
        quality={100}
        className="w-auto h-48 md:h-60 lg:h-72"
      />
      <div className="flex flex-col items-center lg:px-64 gap-8">
        <div className="text-lg">
          <Translation translationKey="emblem_p1" />
        </div>
        <div className="text-lg">
          <Translation translationKey="emblem_p2" />
        </div>
        <div className="text-lg">
          <Translation translationKey="emblem_p3" />
        </div>
        <div className="text-lg">
          <Translation translationKey="emblem_p4" />
        </div>
        <div className="text-lg">
          <Translation translationKey="emblem_p5" />
        </div>
        <div className="text-lg">
          <Translation translationKey="emblem_p6" />
        </div>
      </div>
    </section>
  );
}
