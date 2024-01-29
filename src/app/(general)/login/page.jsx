import Login from "@/components/Login";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-blue-900 h-screen w-full flex flex-col gap-12 items-center justify-center">
      <Login />
      <Image
        src="/sailors_waiting.png"
        width="862"
        height="652"
        alt="Image of Sailors Waiting"
        className="w-64 lg:w-96 h-auto"
      />
    </div>
  );
}
