import { ReactNode } from "react";
import {Text} from '@ignite-ui/react'
interface FormErrorProps{
  children: ReactNode;
}

export function FormError({children}: FormErrorProps) {
  return (
    <p className='text-red text-xs'>
      {children}
    </p>
  );
}
