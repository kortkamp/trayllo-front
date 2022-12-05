import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import CardPersonalizado from '../components/CardPersonalizado/CardPersonalizado'
export default function index() {
  return (
    <Fragment>
      <CardPersonalizado></CardPersonalizado>
      <Footer></Footer>
    </Fragment>
  )
}
