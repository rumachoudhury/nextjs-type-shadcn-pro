// src/app/dashboard/layout.tsx
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <div className="p-6">{children}</div>
    </MaxWidthWrapper>
  );
}
