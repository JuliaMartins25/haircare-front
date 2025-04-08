import styles from "./container5.module.css";

const Container5 = () => {
    return (
        <div className={styles.container5}>
            <div className={styles.weMake}>
                <h2>Veja o que fizemos</h2>
                <p>Fizemos um app intuitivo, leve e recheado de conteúdo e funções para você!</p>
                <div className={styles.makeCards}>
                    <img src="https://i.ibb.co/DD5jgtWD/tela-mob1.png" alt="Tela do app 1" />
                    <img src="https://i.ibb.co/KpDqDms7/unnamed.jpg" alt="Tela do app 2" />
                    <img src="https://i.ibb.co/TqMr9rfV/tela-mob3.png" alt="Tela do app 3" />
                </div>
            </div>
        </div>
    );
};

export default Container5;