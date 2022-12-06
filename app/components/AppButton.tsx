import { ButtonHTMLAttributes, ReactNode } from "react"
import {clsx} from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  size?: 'sm' | 'md';
  variant?: 'primary' | 'secondary'
}

export default function AppButton({ size='md', variant='primary', children, className, ...props}: ButtonProps) {
  return (
    <button 
      className={clsx(
        'font-extrabold rounded px-7 box-border whitespace-nowrap uppercase transition-colors hover:shadow-md',
        {
          'bg-primary  text-white': variant === 'primary',
          'bg-white hover:bg-primary-light text-primary': variant === 'secondary',
        },
        {
          'text-2xs h-8': size === 'sm',
          'text-xs h-10 w-40': size === 'md',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}