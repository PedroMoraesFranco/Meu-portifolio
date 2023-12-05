import './Post.css';
import styles from './Post.module.css';

import { Route, Routes, useParams } from "react-router-dom";
import projetos from "json/posts.json"; 
import PostModelo from "componentes/PostModelo";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    const { tecnologia, projeto } = useParams();

    const projetoSelecionado = projetos.find(p => p.tecnologia === tecnologia && p.projeto === projeto);

    if (!projetoSelecionado) {
        return <NaoEncontrada />;
    }

    const projetosRecomendados = projetos
        .filter(p => p.tecnologia !== tecnologia || p.projeto !== projeto)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            titulo={projetoSelecionado.projeto}
                        >
                            <div className="post-markdown-container">
                                {/* Inclua outros detalhes do projeto conforme necessário */}
                            </div>

                            <h2 className={styles.tituloOutrosProjetos}>
                                Outros projetos que você pode gostar:
                            </h2>

                            <ul className={styles.projetosRecomendados}>
                                {projetosRecomendados.map(p => (
                                    <li key={`${p.tecnologia}-${p.projeto}`}>
                                        <PostCard projeto={p} />
                                    </li>
                                ))}
                            </ul>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
}
