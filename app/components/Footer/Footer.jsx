import { Fragment } from "react"
import {Inter, Open_Sans} from "@next/font/google"
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'

const inter = Inter({
    weight: '500',
    subsets: ['latin'] 
    })

const openSans = Open_Sans()

export default function Footer() {
  return (
    <Fragment>
        <footer className="bg-[#490177] py-6">
            <div className="container mx-auto w-9/12">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between mt-5 mb-9">
                        <h3 className={`${inter.className} text-2xl`}>Trayllo</h3>
                        <div className={`${openSans.className} flex items-end text-base font-light`}>
                            <a href="" className="mr-10">Política de Privacidade</a>
                            <a href="">Termos de Uso</a>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between mt-9 mb-4">
                        <p className="font-light">@2022 Trayllo</p>
                        <div className="flex flex-row justify-between">
                        <FontAwesomeIcon icon={faInstagram} className="mx-4 text-xl"/>
                        <FontAwesomeIcon icon={faLinkedin} className="mx-4 text-xl" />
                        <FontAwesomeIcon icon={faFacebook} className="mx-4 text-xl" />
                        <FontAwesomeIcon icon={faTwitter} className="mx-4 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>
  )
}
