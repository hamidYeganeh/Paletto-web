import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import type { CheckboxProps } from "./CheckboxTypes"
import { checkboxStyles, checkboxIndicatorStyles } from "./CheckboxStyles"

export default function Checkbox({ className, children, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root {...props} className={checkboxStyles({ className })}>
      <CheckboxPrimitive.Indicator className={checkboxIndicatorStyles()} />
      {children}
    </CheckboxPrimitive.Root>
  )
}