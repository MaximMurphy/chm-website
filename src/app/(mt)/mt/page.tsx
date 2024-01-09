import BackgroundVideo from "@/components/BackgroundVideo";
import MTInfo from "@/components/MTInfo";
import Link from "next/link";

export default function MT() {
  return (
    <>
      <section>
        <BackgroundVideo />
        <div className="z-50 fixed top-0 w-fit h-fit flex p-4">
          <Link href="/" className="btn btn-ghost">
            Back to Main Site
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-900/50"></div>
        <div className="z-40 absolute top-0 w-full h-full flex flex-col items-center justify-center mt-24 gap-48">
          <p className="text-5xl lg:text-9xl font-bold">MT 2024</p>
          <Link href="#info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path strokeLinecap="round" d="m33 21l-9 9l-9-9" />
              </g>
            </svg>
          </Link>
        </div>
      </section>
      <section
        id="info"
        className="bg-slate-900 h-full w-full py-12 px-4 lg:p-20"
      >
        <MTInfo />
      </section>
    </>
  );
}
