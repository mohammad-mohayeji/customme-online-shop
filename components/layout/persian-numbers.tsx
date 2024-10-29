"use client"

import { convertNumbersToPersian } from "@/hooks/convertNumbersToPersian";
import React, { useEffect } from "react";

type PersianNumbersType = {
  children: React.ReactNode;
};

export default function PersianNumbers({ children }: PersianNumbersType) {
  useEffect(() => {
    const cleanup = convertNumbersToPersian();

    // Cleanup observer on unmount
    if (cleanup) return () => cleanup();
  }, []);

  return <>{children}</>;
}
