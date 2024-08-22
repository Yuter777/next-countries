"use client";
import { useState } from "react";
import { countries } from "../data/countries";
import Link from "next/link";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-12 dark:bg-gray-900 pt-28">
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-40 p-2 mb-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="p-5 grid grid-cols-1 bg-white sm:grid-cols-2  dark:bg-gray-900 lg:grid-cols-4 gap-10 ">
        {filteredCountries.map((country) => (
          <Link key={country.name} href={`/${country.name}`}>
            <div className="bg-white dark:bg-gray-700  rounded-sm shadow-md">
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-40 object-cover rounded-md"
              />{" "}
              <div className="p-4">
                <h2 className="mt-2 text-lg dark:text-white">{country.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Population: {country.population.toLocaleString()}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Region: {country.region}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Capital: {country.capital}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
