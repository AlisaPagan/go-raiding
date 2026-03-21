"use client";

import { useEffect } from "react";
import { getRaids } from "@/services/mockApi";

export default function TestPage() {
  useEffect(() => {
    getRaids().then((data) => {
      console.log("RAIDS:", data);
    });
  }, []);

  return <div>Test page</div>;
}
