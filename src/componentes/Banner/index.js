import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Portifólio
                </h1>

                <p className={styles.paragrafo}>
                    Me chamo <b>Pedro Luís Moraes Franco.</b>
                    
                </p>
                <p className={styles.paragrafo}>
                    Seja bem vindo ao meu repositório pessoal!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Pedro"
                />
            </div>
        </div>
    )
}