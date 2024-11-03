import FeatureList from "@/components/FeatureList";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <div className="sm:grid sm:grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 row-start-2 items-center font-[family-name:var(--font-geist-mono)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 mt-2 sm:mt-0">
            <h2 className="text-4xl/snug text-gray-900 md:text-5xl/relaxed tracking-widest lg:font-semibold">
              Digital Ticketing Reimagined
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              A low cost, high performance ticketing system that connects event
              organizers directly with their audience
            </p>
          </div>
          <FeatureList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
