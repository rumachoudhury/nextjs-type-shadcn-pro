import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  dark?: boolean;
}

function Phone({ imageSrc, className, dark = false, ...props }: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none -z-50 overflow-hidden",
        dark ? "bg-black" : "bg-white",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edegs.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone-image"
        width={40}
        height={40}
        className="object-cover pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          src={imageSrc}
          alt="overlaying phone image"
          width={60}
          height={60}
          className="object-cover  "
        />
      </div>
    </div>
  );
}

export default Phone;

// import { cn } from "@/lib/utils";
// cn stands for "class names" — it's a utility function to combine and conditionally apply CSS class names.
