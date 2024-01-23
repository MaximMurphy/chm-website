import Image from "next/image";

export default function Carousel() {
  return (
    <div className="w-[22rem] lg:w-[50rem] carousel carousel-center rounded-box">
      <div className="carousel-item w-full">
        <Image
          src="/2023_MVT.jpg"
          className="rounded-box object-cover w-full h-auto"
          alt="MVT 2023"
          width={6000}
          height={4000}
        />
      </div>
      <div className="carousel-item w-full">
        <Image
          src="/2023_rada_chm.jpg"
          className="rounded-box object-cover w-full h-auto"
          alt="ChM Rada 2023"
          width={4032}
          height={3024}
        />
      </div>
      <div className="carousel-item w-full">
        <Image
          src="/2023_rada.jpeg"
          className="rounded-box object-cover w-full h-auto"
          alt="Velyka Rada 2023"
          width={2962}
          height={1496}
        />
      </div>
    </div>
  );
}
