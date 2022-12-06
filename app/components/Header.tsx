import Image from 'next/image'
import { useState } from 'react'
import AppButton from './AppButton'
import AppLink from './AppLink'


const MenuIcon = () => (
  <svg width={40} height={40} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill='white'>
    <title>{"Menu"}</title>
    <path d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" />
  </svg>
)

const CloseIcon = () => (
  <svg width={60} height={60} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='white'>
    <g data-name="Layer 2">
      <path
        d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
        data-name="close"
      />
    </g>
  </svg>
)


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () =>{
    setIsMenuOpen(prev => !prev)
  }
  const handleCloseMenu = () =>{
    setIsMenuOpen(false)
  }

  return (
    <header className="flex items-center justify-between pt-6">
      <span>
        <Image src="/logo.svg" alt="Trayllo Logo" width={205} height={50} />
      </span>
      <div className='flex items-center justify-between'>
        <button className='md:hidden' onClick={handleToggleMenu} >
          <MenuIcon />
        </button>
        <div className={`max-md:fixed inset-0 max-md:bg-primary max-md:bg-opacity-95 ${!isMenuOpen ? 'max-md:hidden' : 'z-50'}` }>
          <div className={`flex items-center justify-between gap-12   max-md:flex-col max-md:py-10 `}>
            <AppLink href={''}>Integração</AppLink>
            <AppLink href={''}>Extras</AppLink>
            <AppLink href={''}>Sobre</AppLink>
            <AppButton variant='secondary' size='sm'>Teste Grátis</AppButton>
            <button onClick={handleCloseMenu} className='md:hidden absolute right-1 top-5'>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

