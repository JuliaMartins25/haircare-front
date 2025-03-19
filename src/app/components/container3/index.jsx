import styles from "./container.module.css";

const Container3 = () => {
    return (
        <div className={styles.container3}>
            <div className={styles.about2}>
                <div className={styles.cllLeft}>
                    <img 
                        src="https://i.ibb.co/pBgDf4pp/Captura-de-tela-2025-03-18-220949.png" 
                        alt="Descrição da imagem" 
                    />
                </div>
                <div className={styles.texto}>
                    <h2>Uma plataforma completa</h2>
                    <p>
                        O novo Meu Cronograma Capilar é uma
                        plataforma completa para assuntos
                        relacionados aos cuidados capilares.
                    </p>
                    <p>
                        A nova plataforma nos possibilitará incluir
                        diversas funcionalidades para que você
                        aproveite ao máximo o app.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Container3;