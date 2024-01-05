"use client"

import { Avatar } from "@ignite-ui/react";

interface AvatarProps {
  src: string;
}

export function UserAvatar({src}: AvatarProps) {
  return (
    <Avatar src={src} />
  )
}