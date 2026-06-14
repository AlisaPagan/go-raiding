"use client";
import { useState } from "react";

import Input from "@/components/UI/Input/Input";
import NumberInput from "@/components/UI/NumberInput/NumberInput";

export default function LoginPage() {
  const [numberValue, setNumberValue] = useState(0);
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
      <NumberInput
        id="test-number"
        name="testNumber"
        label="test number"
        value={numberValue}
        onChange={setNumberValue}
      />
    </main>
  );
}
