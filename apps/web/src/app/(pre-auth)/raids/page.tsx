"use client";

import SearchInput from "@/components/UI/SearchInput/SearchInput";

export default function RaidsPage() {
  function handleBlur() {
    console.log("Blurred");
  }
  function handleChange() {
    console.log("Changed");
  }

  return (
    <main style={{ padding: 25 }}>
      <SearchInput
        id="search"
        name="search"
        placeholder="Search raids"
        value=""
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </main>
  );
}
