import Image from "next/image";
import Link from "next/link";
import MTForms2 from "@/components/MTForms2";

export default function MTInfo() {
  return (
    <div className="h-full flex flex-col items-center gap-12">
      <h1 className="text-3xl lg:text-5xl">Морський Табір 2024</h1>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-8 text-lg">
        <Image
          src="/2022_MT.jpg"
          alt="MT 2022 Photo"
          width={2048}
          height={1536}
          className="h-80 lg:h-[30rem] w-auto"
        />
        <div className="flex flex-col gap-4 items-start justify-center">
          <p className="text-lg lg:text-xl">Коли: 3-го до 10-го серпня 2024</p>
          <p className="text-lg lg:text-xl">
            Де: West Branch State Park, Ravenna OH
          </p>
          <Link
            href="/MT_Uchasnyk_Forms/Виряд MT 24.pdf"
            target="_blank"
            className="drawer-button btn btn-primary w-48"
          >
            Виряд (Packing List)
          </Link>
          <MTForms2 />
        </div>
      </div>
      <p className="text-center">
        If you have any questions, please e-mail us:
        <br />
        <Link href="mailto:chmlomt@gmail.com" target="_blank">
          chmlomt@gmail.com
        </Link>
      </p>
    </div>
  );
}
