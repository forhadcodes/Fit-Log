import LibraryLiftCard from "@/components/shared/LibraryLiftCard";
import { ILiftData } from "@/types/liftcard";
import { FITLOG_ENDPOINT } from "@/lib/api";

const getLibraryData = async (): Promise<ILiftData[]> => {
  try {
    const res = await fetch(FITLOG_ENDPOINT, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch library data");
    }

    const data: ILiftData[] = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching lift data:", error);
    return [];
  }
};

const Library = async () => {
  const libraryData = await getLibraryData();

  return (
    <section className="min-h-screen bg-[#0B0D10] text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-black uppercase font-mono mb-2">
            THE LIBRARY
          </h2>

          <p className="text-zinc-400 text-sm md:text-base max-w-md">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {libraryData.length === 0 ? (
          <div className="text-center text-zinc-500 py-10">
            No lift data available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryData.map((lift: ILiftData, index: number) => (
              <LibraryLiftCard key={lift.id || index} lift={lift} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Library;