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
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone-image"
        // width={40}
        // height={40}
        width={300}
        height={600}
        className="object-cover pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          src={imageSrc}
          alt="overlaying phone image"
          width={300}
          height={600}
          className="object-cover  "
        />
      </div>
    </div>
  );
}

export default Phone;

///////

// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import React, { HTMLAttributes } from "react";

// interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
//   imageSrc: string; // Overlay image inside the phone
//   dark?: boolean; // Toggle between light and dark phone frame
// }

// function Phone({ imageSrc, className, dark = false, ...props }: PhoneProps) {
//   return (
//     <div
//       className={cn(
//         "relative w-[300px] h-[600px] overflow-hidden rounded-xl",
//         dark ? "bg-black" : "bg-white",
//         className
//       )}
//       {...props}
//     >
//       {/* Phone Frame Image */}
//       <Image
//         src={
//           dark
//             ? "/phone-template-dark-edges.png"
//             : "/phone-template-white-edges.png"
//         }
//         alt="Phone frame"
//         // fill
//         className="pointer-events-none z-50 select-none"
//       />

//       {/* App Screenshot Inside Phone */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={imageSrc}
//           alt="Phone screen content"
//           fill
//           className="object-cover min-w-full min-h-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default Phone;

////////

// import { cn } from "@/lib/utils";
// cn stands for "class names" — it's a utility function to combine and conditionally apply CSS class names.
