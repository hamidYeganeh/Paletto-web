import { cva } from "class-variance-authority"

export const avatarStyles = cva("inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-600", {
  variants: {
    size: {
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg"
    }
  },
  defaultVariants: {
    size: "md"
  }
})
