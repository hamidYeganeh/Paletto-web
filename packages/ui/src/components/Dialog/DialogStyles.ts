import { cva } from "class-variance-authority"

export const overlayStyles = cva("fixed inset-0 bg-black/40")
export const contentStyles = cva(
  "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded bg-white p-6 shadow-lg focus:outline-none"
)
export const titleStyles = cva("text-lg font-semibold text-primary-600")
export const descriptionStyles = cva("mt-2 text-sm text-black/70")
