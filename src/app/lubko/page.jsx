import Translation from "@/components/Translation";
import Image from "next/image";
import Link from "next/link";

export default function lubko() {
  return (
    <section className="bg-slate-900 h-full w-full flex flex-col items-center px-6 py-16 md:p-8 lg:p-12 gap-8">
      <h1 className="text-5xl text-center">
        <Translation translationKey="lubko_title" />
      </h1>
      <Image
        src="/chm_lubko.png"
        alt="Lubko"
        height={199}
        width={139}
        quality={100}
        className="w-auto h-64 md:h-72 lg:h-80"
      />
      <div className="flex flex-col gap-8">
        <div className="text-lg">
          <Translation translationKey="lubko_p1" />
        </div>
        <div className="text-lg">
          <Translation translationKey="lubko_p2" />
        </div>
        <div className="text-lg">
          <Translation translationKey="lubko_p3" />
        </div>
        <div className="text-sm">
          <Translation translationKey="lubko_p4" />
        </div>
      </div>
      <div className="flex gap-8">
        <Link
          href="/Спомини-Пана-Любка-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">Спомини Пана Любка</button>
        </Link>
        <Link
          href="https://docs.google.com/document/d/1WlnxKJjDtKhl_IwKokvDjie2GzfcKapio5PoN2ZxhOw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">Остання Pада</button>
        </Link>
      </div>
    </section>
  );
}
