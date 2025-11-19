import { cva } from "class-variance-authority"

export const buttonStyles = cva(
  "inline-flex items-center justify-center rounded px-4 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-white text-primary-600 border border-primary-500 hover:bg-primary-50",
        ghost: "bg-transparent text-primary-600 hover:bg-primary-50"
      },
      size: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)
