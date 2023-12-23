import Translation from "@/components/Translation";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="h-full flex flex-col items-center justify-center p-24 gap-12">
        <h1 className="text-5xl">
          <Translation translationKey="home_greeting" />
        </h1>
        <p className="text-3xl">
          <Translation translationKey="home_title" />
        </p>
      </main>
    </div>
  );
}
