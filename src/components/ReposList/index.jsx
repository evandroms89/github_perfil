import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuarioFinal}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setDeuErro(false)
        setEstaCarregando(true)
            fetch(`https://api.github.com/users/${nomeUsuarioFinal}/repos`)
            .then(res => {
                if(!res.ok) {
                    throw new Error
                }
                return res
            })
            .then(resOk => resOk.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            }).catch(e => {
                setDeuErro(true);
            })
    }, [nomeUsuarioFinal]);

    return (
        <>
            <div className="container">
                {deuErro ? (
                    <h1>Deu erro, usuário não encontrado</h1>
                ) : estaCarregando ? (<h1>Carregando....</h1>) : (
                    <ul className={styles.list}>
                        {repos.map(repositorio => (
                            <li className={styles.listItem} key={repositorio.id}>
                                <div className={styles.itemName}>
                                    <b>Nome:</b>
                                    {repositorio.name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b>
                                    {repositorio.language}
                                </div>
                                <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>

    )
}

export default ReposList;