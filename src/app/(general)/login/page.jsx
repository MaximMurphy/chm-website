import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="bg-blue-900 h-full w-full py-24 lg:py-36 flex items-center justify-center">
      <SignIn />
    </div>
  );
}
