import { ReactNode } from "react"
import {clsx} from 'clsx'
import Link from "next/link";

export interface AppLinkProps {
  children: ReactNode;
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary'
  className?: string
  href: string
}

export default function AppLink({ size='md', variant='primary', children, className, ...props}: AppLinkProps) {
  return (
    <Link 
      className={clsx(
        'font-bold whitespace-nowrap uppercase font-sans',
        {
          'text-white': variant === 'primary',
          'text-primary': variant === 'secondary',
        },
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
        },
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}