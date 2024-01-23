import Translation from "@/components/Translation";
import Image from "next/image";
import Navigare from "@/components/Navigare";
import Carousel from "@/components/Carousel";
import HomeInfo from "@/components/HomeInfo";
import StripeDivider from "@/components/StripeDivider";

export default function Home() {
  return (
    <main className="h-fit w-full flex flex-col items-center mb-24">
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
      <StripeDivider />
      <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
        <Image
          src="/2023_MVT.jpg"
          className="object-cover w-full h-auto"
          alt="MVT 2023"
          width={6000}
          height={4000}
        />
        <Navigare />
      </div>
      <StripeDivider />
      <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
        <Image
          src="/2023_rada_chm.jpg"
          className="object-cover w-full h-auto lg:hidden"
          alt="ChM Rada 2023"
          width={4032}
          height={3024}
        />
        <HomeInfo />
        <Image
          src="/2023_rada_chm.jpg"
          className="object-cover w-full h-auto hidden lg:flex"
          alt="ChM Rada 2023"
          width={4032}
          height={3024}
        />
      </div>
      <StripeDivider />
      <p>Instagram Feed</p>
      <p>Leadership Carousel</p>
      <p>Contact Email Link</p>
    </main>
  );
}
