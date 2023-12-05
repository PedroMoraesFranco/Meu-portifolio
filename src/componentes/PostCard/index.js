import React from 'react';
import PropTypes from 'prop-types';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './Post.module.css';

export default function PostCard({ projeto }) {
    const { linkPagina, projeto: nomeProjeto } = projeto;

    return (
        <a href={linkPagina} target="_blank" rel="noopener noreferrer">
            <div className={styles.post}>
                <h2 className={styles.titulo}>{nomeProjeto}</h2>
                <BotaoPrincipal>Detalhes</BotaoPrincipal>
            </div>
        </a>
    );
}

PostCard.propTypes = {
    projeto: PropTypes.shape({
        linkPagina: PropTypes.string.isRequired,
        projeto: PropTypes.string.isRequired,
    }).isRequired,
};
