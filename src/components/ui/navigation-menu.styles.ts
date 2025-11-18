import { cva } from "class-variance-authority";

// Shared trigger styles for navigation menu. Kept as a function so callers
// can call navigationMenuTriggerStyle() like in the original code.
export const navigationMenuTriggerStyle = cva(
  "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring",
  {
    variants: {},
    defaultVariants: {},
  }
);
