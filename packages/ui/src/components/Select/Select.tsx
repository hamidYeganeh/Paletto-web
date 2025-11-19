import * as SelectPrimitive from "@radix-ui/react-select"
import { selectTriggerStyles, selectContentStyles, selectItemStyles } from "./SelectStyles"

export const Select = {
  Root: SelectPrimitive.Root,
  Trigger: ({ className, ...props }: SelectPrimitive.SelectTriggerProps) => (
    <SelectPrimitive.Trigger {...props} className={selectTriggerStyles({ className })} />
  ),
  Value: SelectPrimitive.Value,
  Icon: SelectPrimitive.Icon,
  Portal: SelectPrimitive.Portal,
  Content: ({ className, ...props }: SelectPrimitive.SelectContentProps) => (
    <SelectPrimitive.Content {...props} className={selectContentStyles({ className })} />
  ),
  Viewport: SelectPrimitive.Viewport,
  Item: ({ className, ...props }: SelectPrimitive.SelectItemProps) => (
    <SelectPrimitive.Item {...props} className={selectItemStyles({ className })} />
  )
}