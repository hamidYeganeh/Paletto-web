import * as PopoverPrimitive from "@radix-ui/react-popover"
import { popoverContentStyles } from "./PopoverStyles"

export const Popover = {
  Root: PopoverPrimitive.Root,
  Trigger: PopoverPrimitive.Trigger,
  Content: ({ className, ...props }: PopoverPrimitive.PopoverContentProps) => (
    <PopoverPrimitive.Content {...props} className={popoverContentStyles({ className })} />
  )
}