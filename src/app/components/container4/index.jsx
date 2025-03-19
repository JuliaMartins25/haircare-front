import styles from "./container4.module.css";

const Container4 = () => {
    return (
        <div className={styles.container4}>
            <div className={styles.cllRight2}>
                <img 
                    src="https://i.ibb.co/FbjGpxH4/Captura-de-tela-2025-03-18-222746.png" 
                    alt="Equipe especializada" 
                />
            </div>
            <div className={styles.about3}>
                <h2>
                    Gente especializada<br />
                    trabalhando para você!
                </h2>
                <p>
                    Nosso quadro de gente especializada cria os cronogramas, conteúdo, receitas
                    e auxilia você em quaisquer problemas relativos ao teu cabelo.
                </p>
            </div>
        </div>
    );
};

export default Container4;