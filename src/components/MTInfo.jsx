import Image from "next/image";
import Link from "next/link";
import MTForms2 from "@/components/MTForms2";

export default function MTInfo() {
  return (
    <div className="h-full flex flex-col items-center gap-12">
      <h1 className="text-3xl lg:text-5xl">Морський Табір 2024</h1>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-8 text-lg">
        <div className="flex flex-col w-full gap-8">
          <Image
            src="/2022_MT.jpg"
            alt="MT 2022 Photo"
            width={2048}
            height={1536}
            className="w-fit"
          />
          <Image
            src="/MT_Uchasnyk_Forms/IMG_0952.JPG"
            alt="Dropoff Map"
            width={1003}
            height={681}
            className="w-fit"
          ></Image>
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          <p className="text-lg lg:text-xl">Коли: 4-го до 10-го серпня 2024</p>
          <p className="text-lg lg:text-xl">
            Де: West Branch State Park, Ravenna OH
          </p>
          <p className="text-base lg:text-lg">
            Ми будем мати наше відкриття табору точно в 16:00 огод. (4:00 pm), а
            закриття 10-го в 12:00 огод. Обидва будуть при таборі в West Branch
            State Park. Реєстрація для табір починається в 11-год. Це буде в
            паркової площі над кругом на карті котре показує терен табору.
          </p>
          <p className="text-base lg:text-lg">
            We will have our opening ceremony beginning exactly at 16:00 hours
            (4:00pm), and closing ceremony at 12:00pm August 10th. Both
            ceremonies will be at the campground in West Branch State Park.
            Additionally registration for camp will begin at 11am. It will take
            place in the parking lot to the right above the campgrounds which
            have been circled.
          </p>

          <Link
            href="/MT_Uchasnyk_Forms/Виряд MT 24-1.pdf"
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
