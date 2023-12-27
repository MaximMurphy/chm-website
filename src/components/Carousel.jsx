import Image from "next/image";

export default function Carousel() {
  return (
    <div className="w-96 lg:w-[60rem] carousel px-48 space-x-4 rounded-box">
      <div className="carousel-item ">
        <Image
          src="/2023_rada.jpeg"
          className="rounded-box object-cover w-auto h-96"
          alt="Velyka Rada 2023"
          width={2962}
          height={1496}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="/2023_MVT.jpg"
          className="rounded-box object-cover w-auto h-96"
          alt="MVT 2023"
          width={6000}
          height={4000}
        />
      </div>
      <div className="carousel-item">
        <Image
          src="/2023_rada_chm.jpg"
          className="rounded-box object-cover w-auto h-96"
          alt="ChM Rada 2023"
          width={4032}
          height={3024}
        />
      </div>
    </div>
  );
}
