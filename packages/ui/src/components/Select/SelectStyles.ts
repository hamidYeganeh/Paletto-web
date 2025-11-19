import { cva } from "class-variance-authority"

export const selectTriggerStyles = cva("inline-flex items-center justify-between rounded border border-primary-500 px-3 py-2 text-primary-600 bg-white")
export const selectContentStyles = cva("rounded bg-white shadow border border-primary-500")
export const selectItemStyles = cva("px-3 py-2 data-[highlighted]:bg-primary-50 text-primary-600")
