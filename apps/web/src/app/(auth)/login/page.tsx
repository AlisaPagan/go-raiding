"use client";

import Input from "@/components/UI/Input/Input";

export default function LoginPage() {
  return (
    <main style={{ padding: 25 }}>
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
    </main>
  );
}
