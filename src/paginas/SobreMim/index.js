import React from "react";
import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, sou Pedro Luís Moraes Franco!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Pedro"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Estudo física na UFSCar (Universidade Federal de São Carlos) desde 2020 e sou um entusiasta da programação, com o objetivo de me tornar um desenvolvedor full-stack.
            </p>
            <p className={styles.paragrafo}>
                Em 2018, concluí um curso de usinagem em máquinas convencionais e também realizei um curso de SolidWorks no mesmo ano.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, trabalho no ramo de engenharia de testes, com foco em testes funcionais (FCT) e testes in circuit (ICT). Possuo certificação em manutenção e calibração da máquina i3070 Keysight.
            </p>

            
            <p className={styles.paragrafo}>
                Para oportunidades de colaboração ou apenas para trocar uma ideia, sinta-se à vontade para me enviar um e-mail em <a href="mailto:pedroluis052001@gmail.com">pedroluis052001@gmail.com</a>.
            </p>
            <p className={styles.paragrafo}>
               Saiba mais sobre mim e/ou entre em contato usando:
            
            <div className={styles.redesSociais}>
                <a href="https://www.linkedin.com/in/pedro-luís-moraes-franco-b10895146" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://github.com/pedromoraesfranco" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            </p>
        </PostModelo>
    );
}
