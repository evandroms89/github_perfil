import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuarioFinal}) => {
    // const [carregou, setCarregou] = useState(false);
    // useEffect(() => {
    //     setCarregou(true);
    //     if(carregou == true) {
    //         ok
    //     }
    //     setCarregou(false)
    // }, [acesso])
    return (
        <header className={styles.header}>
            <a href={`https://github.com/${nomeUsuarioFinal}`} target="_blank">
                <img className={styles.avatar} src={`https://github.com/${nomeUsuarioFinal}.png`} /></a>
            <h1 className={styles.name}>
                {nomeUsuarioFinal}
            </h1>
        </header>
    )
}

export default Perfil