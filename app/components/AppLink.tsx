import { ReactNode } from "react"
import {clsx} from 'clsx'
import Link from "next/link";

export interface AppLinkProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md';
  variant?: 'primary' | 'secondary' | '_blank' | ''
  className?: string
  href: string
  onClick? : ()=>void
}

export default function AppLink({ size='md', variant='primary', children, className, ...props}: AppLinkProps) {
  return (
    <Link 
      className={clsx(
        ' whitespace-nowrap uppercase font-sans flex items-center',
        {
          'text-white font-bold': variant === 'primary' || variant === '',
          'text-primary font-bold': variant === 'secondary',
          'bg-white hover:bg-primary-extra-light text-primary font-extrabold rounded px-7 box-border transition-colors hover:shadow-md': variant === '_blank',
        },
        {
          'text-2xs h-8': size === 'xs',
          'text-xs h-10': size === 'sm',
          'text-sm h-10': size === 'md',
        },
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}