import Image from "next/image";

export default function MTInfo() {
  return (
    <div className="flex flex-col items-center gap-12">
      <h1 className="text-3xl lg:text-5xl">Морський Табір 2024</h1>
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-8 text-lg">
        <Image
          src="/2022_MT.jpg"
          alt="MT 2022 Photo"
          width={2048}
          height={1536}
          className="h-80 lg:h-[30rem] w-auto"
        />
        <p className="text-lg lg:text-xl">
          MT will take place August 3rd-10th. There will be more information
          soon. We hope you can all make it!
        </p>
      </div>
      <p>
        If you have any questions, you may send us an e-mail: chmlomt@gmail.com
      </p>
    </div>
  );
}
