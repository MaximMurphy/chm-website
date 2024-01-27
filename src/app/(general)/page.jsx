import Translation from "@/components/Translation";
import Image from "next/image";
import Navigare from "@/components/Navigare";
import HomeInfo from "@/components/HomeInfo";
import StripeDivider from "@/components/StripeDivider";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <main className="h-fit w-full flex flex-col items-center">
      <div className="flex flex-col w-full relative items-center justify-center">
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
      <StripeDivider />
      <div className="bg-blue-900 flex flex-col lg:flex-row w-full justify-between">
        <div>
          <Image
            src="/2023_MVT.jpg"
            className="object-cover h-auto w-full"
            alt="MVT 2023"
            width={6000}
            height={4000}
          />
        </div>
        <div className="p-8 lg:p-12">
          <Navigare />
        </div>
      </div>

      <StripeDivider />
      <div className="bg-blue-900 flex flex-col lg:flex-row w-full justify-between">
        <Image
          src="/2023_rada_chm.jpg"
          className="object-cover w-full h-auto lg:hidden"
          alt="ChM Rada 2023"
          width={4032}
          height={3024}
        />
        <div className="p-8 lg:p-12">
          <HomeInfo />
        </div>
        <div>
          <Image
            src="/2023_rada_chm.jpg"
            className="object-cover h-auto w-fit hidden lg:flex"
            alt="ChM Rada 2023"
            width={4032}
            height={3024}
          />
        </div>
      </div>
      <StripeDivider />
      <Instagram />
      <div className="flex flex-col gap-8 py-12 text-3xl text-center">
        <p>Leadership Carousel</p>
        <p>
          {" Contact us at: "}
          <a className="cursor-pointer" href="mailto:chornomortsi@gmail.com">
            chornomortsi@gmail.com
          </a>
        </p>
      </div>
      <Image
        src="/2023_rada.jpeg"
        className="w-full h-auto"
        alt="Velyka Rada 2023"
        width={2962}
        height={1496}
      />
    </main>
  );
}
