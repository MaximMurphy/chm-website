import Translation from "@/components/Translation";
import Link from "next/link";

export default function Orions() {
  return (
    <div className="bg-slate-900 h-full w-full flex flex-col items-center px-8 py-16 md:p-8 lg:p-12 gap-12">
      <h1 className="text-3xl font-bold">
        <Translation translationKey="orions" />
      </h1>
      <Link href="/orions" target="_blank" rel="noopener noreferrer">
        <p className="bg-slate-700/50 hover:bg-slate-700/30 cursor-pointer rounded-lg h-40 lg:h-40 p-2 lg:p-4 flex items-center justify-center text-center text-base lg:text-lg">
          Redactor:
        </p>
      </Link>
    </div>
  );
}
