"use client";

import Input from "@/components/UI/Input/Input";
import Select from "@/components/UI/Select/Select";
import { useState } from "react";

export default function LoginPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const testOptions = [
    { value: "normal", label: "Normal" },
    { value: "heroic", label: "Heroic" },
    { value: "mythic", label: "Mythic" },
    { value: "locked", label: "Locked option", disabled: true },
  ];
  return (
    <main style={{ padding: 25, display: "flex", flexDirection: "column", gap: 18 }}>
      <Input
        id="test"
        name="test"
        value=""
        type="text"
        placeholder="Input your text"
        disabled={false}
        onChange={() => {
          return console.log("changed");
        }}
        onBlur={() => {
          return console.log("blurred");
        }}
        label="test input"
      ></Input>
      <Select
        id="select"
        name="select"
        label="select difficulty"
        placeholder="select difficulty"
        value={selectedValue}
        options={testOptions}
        onChange={setSelectedValue}
        disabled={false}
      />
    </main>
  );
}
