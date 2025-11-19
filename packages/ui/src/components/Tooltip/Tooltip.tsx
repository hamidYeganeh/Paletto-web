import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { tooltipContentStyles } from "./TooltipStyles"

export const Tooltip = {
  Provider: TooltipPrimitive.Provider,
  Root: TooltipPrimitive.Root,
  Trigger: TooltipPrimitive.Trigger,
  Content: ({ className, ...props }: TooltipPrimitive.TooltipContentProps) => (
    <TooltipPrimitive.Content {...props} className={tooltipContentStyles({ className })} />
  )
}