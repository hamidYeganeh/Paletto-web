import type { ButtonProps } from "./ButtonTypes"
import { buttonStyles } from "./ButtonStyles"

export default function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button {...props} className={buttonStyles({ variant, size, className })} />
}
