import { cva } from "class-variance-authority"

export const checkboxStyles = cva("inline-flex items-center justify-center rounded border border-primary-500", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
})
export const checkboxIndicatorStyles = cva("text-primary-600", {})