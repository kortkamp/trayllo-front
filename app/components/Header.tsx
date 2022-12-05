import Image from 'next/image'
import Link from 'next/link'
import AppButton from './AppButton'
import AppLink from './AppLink'


export default function Header() {
  return (
    <header className="flex items-center justify-between pt-6">
      <span>
        <Image src="/logo.svg" alt="Trayllo Logo" width={205} height={50} />
      </span>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between gap-12'>
          <AppLink href={''}>Integração</AppLink>
          <AppLink href={''}>Extras</AppLink>
          <AppLink href={''}>Sobre</AppLink>
          <AppButton variant='secondary' size='sm'>Teste Grátis</AppButton>
        </div>
      </div>
    </header>
  )
}

