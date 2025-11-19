import * as DialogPrimitive from "@radix-ui/react-dialog"
import { overlayStyles, contentStyles, titleStyles, descriptionStyles } from "./DialogStyles"

export const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Close: DialogPrimitive.Close,
  Title: ({ className, ...props }: DialogPrimitive.DialogTitleProps) => (
    <DialogPrimitive.Title {...props} className={titleStyles({ className })} />
  ),
  Description: ({ className, ...props }: DialogPrimitive.DialogDescriptionProps) => (
    <DialogPrimitive.Description {...props} className={descriptionStyles({ className })} />
  ),
  Portal: DialogPrimitive.Portal,
  Overlay: ({ className, ...props }: DialogPrimitive.DialogOverlayProps) => (
    <DialogPrimitive.Overlay {...props} className={overlayStyles({ className })} />
  ),
  Content: ({ className, ...props }: DialogPrimitive.DialogContentProps) => (
    <DialogPrimitive.Content {...props} className={contentStyles({ className })} />
  )
}