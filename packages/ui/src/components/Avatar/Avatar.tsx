import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { avatarStyles } from "./AvatarStyles"

export const Avatar = {
  Root: ({ className, ...props }: AvatarPrimitive.AvatarProps) => (
    <AvatarPrimitive.Root {...props} className={avatarStyles({ className })} />
  ),
  Image: AvatarPrimitive.Image,
  Fallback: AvatarPrimitive.Fallback
}