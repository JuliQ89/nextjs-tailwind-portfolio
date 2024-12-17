import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center text-white font-preahvihear px-10">
        <div className="flex justify-center max-w-6xl w-full">
          <About />
        </div>
      </div>
    </>
  );
}
