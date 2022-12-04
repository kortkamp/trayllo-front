import { Fragment } from "react"
import {Inter, Open_Sans} from "@next/font/google"
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const inter = Inter({
    weight: '500',
    subsets: ['latin'] 
    })

const openSans = Open_Sans()

export default function Footer() {
  return (
    <Fragment>
        <footer className="bg-[#490177] py-6 w-screen">
            <div className="container mx-auto w-9/12">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between mt-5 mb-9 flex-wrap">
                        <h3 className={`${inter.className} text-2xl text-white`}>Trayllo</h3>
                        <div className={`${openSans.className} flex items-end text-base font-light`}>
                            <Link href="#" className={`${openSans.className} mr-10 text-white`}>Política de Privacidade</Link>
                            <Link href="#" className={`${openSans.className} text-white`}>Termos de Uso</Link>
                        </div>
                    </div>
                    <hr className="opacity-20"/>
                    <div className="flex flex-row justify-between mt-9 mb-4">
                        <p className="font-light text-white">@2022 Trayllo</p>
                        <div className="flex flex-row justify-between">
                            <Link href="#"><FontAwesomeIcon icon={faInstagram} className="mx-4 text-xl text-white"/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faLinkedin} className="mx-4 text-xl text-white"/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faFacebook} className="mx-4 text-xl text-white"/></Link>
                            <Link href="#"><FontAwesomeIcon icon={faTwitter} className="mx-4 text-xl text-white"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
  )
}
