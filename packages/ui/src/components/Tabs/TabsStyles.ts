import { cva } from "class-variance-authority"

export const tabsListStyles = cva("flex gap-2 border-b border-primary-500")
export const tabsTriggerStyles = cva("px-3 py-2 text-primary-600 data-[state=active]:border-b-2 data-[state=active]:border-primary-600")
export const tabsContentStyles = cva("py-3")
