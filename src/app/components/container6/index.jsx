import styles from "./container6.module.css";

const Container6 = () => {
    return (
        <div className={styles.container6} id="avaliacao">
            <div className={styles.avaliacao}>
                <h2>Avaliações</h2>
                <p>Veja o que nossos usuários falaram:</p>
                <div className={styles.avaliacaoCards}>
                    <div className={styles.cardAvaliation1}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                            alt="User" 
                        />
                        <div>
                            <p>Eu amei o app! Meu cabelo está muito mais saudável e bonito agora!</p>
                            <h3>Cristiane</h3>
                        </div>
                    </div>
                    <div className={styles.cardAvaliation2}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                            alt="User" 
                        />
                        <div>
                            <p>Adorei!! Meu cabelo está lindo!</p>
                            <h3>Regina</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container6;