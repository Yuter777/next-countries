"use client";
import { useRouter } from "next/navigation";
import { countries } from "../../data/countries";

export default function CountryDetails({ params }) {
  const { country } = params;
  const router = useRouter();

  const countryData = countries.find(
    (c) => c.name.toLowerCase() === country.toLowerCase()
  );

  if (!countryData) {
    return <div className="p-5 text-center">Country not found.</div>;
  }

  return (
    <div className="p-28 dark:bg-gray-900 pt-28 h-max flex gap-12 pb-40">
      <img
        src={countryData.flag}
        alt={countryData.name}
        className="w-auto h-auto object-cover rounded-md"
      />
      <div className="items-center">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          {countryData.name}
        </h1>
        <div className="mt-4 dark:text-gray-300">
          <p>
            <strong>Population:</strong>{" "}
            {countryData.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {countryData.region}
          </p>
          <p>
            <strong>Capital:</strong> {countryData.capital}
          </p>
        </div>
      </div>
    </div>
  );
}
