import Image from 'next/image'
import styles from './styles.module.scss'
export default function SectionSobre() {
    return(
        <section className={styles.sectionSobre}>
          <div className={styles.contentSobre}>
            <div className={styles.sobreText}>
              <h1>Sobre a Trayllo</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <button className={styles.contactInput}>FALE COM A GENTE</button>
            </div>
            <div className={styles.sobreImgs}>
                <Image src={require('./../../public/sobreImg.png')} alt="Imagem"/>
                <Image src={require('./../../public/sobreImg2.png')} alt="Imagem"/>
            </div>
          </div>
        </section>
    )
}