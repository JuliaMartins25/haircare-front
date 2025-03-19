import styles from "./container2.module.css";

const Container2 = () => {
    return (
        <div className={styles.container2} id="funcoes">
            <div className={styles.about1}>
                <h2>Nosso Cronograma Capilar</h2>
                <p>
                    Duas palavrinhas que fazem muita diferença na hora de cuidar do cabelo são:<br />
                    cronograma capilar. A agenda de tratamentos é ideal para manter os seus fios<br />
                    100% saudáveis. Se você é adepta da descoloração, alisamento ou outras<br />
                    químicas, a hidratação, nutrição e reconstrução serão suas melhores amigas<br />
                    para recuperar a força das suas madeixas. E entender o passo a passo não é<br />
                    nenhum segredo. A gente vai te ensinar tudo!
                </p>
            </div>
            <div className={styles.cardsContainer2}>
                <div className={styles.card1}>
                    <img src="https://i.ibb.co/0pZ9Fxy3/Captura-de-tela-2025-03-18-212832.png" alt="Card 1" />
                    <h3>Quiz</h3>
                    <p>Respondendo um questionário a cada
                    cronograma, podemos criar um plano
                    de cuidados especialmente
                    desenvolvido para o teu cabelo
                    </p>
                </div>
                <div className={styles.card2}>
                    <img src="https://i.ibb.co/FF3gGHK/Captura-de-tela-2025-03-18-212848.png" alt="Card 2" />
                    <h3>Receitas</h3>
                    <p>Para cada passo do
                    cronograma, disponibilizamos
                    diversas receitas com
                    ingredientes naturais que você
                    pode fazer em casa para
                    deixar teu cabelo perfeito</p>
                </div>
                <div className={styles.card3}>
                    <img src="https://i.ibb.co/4wJZz67H/Captura-de-tela-2025-03-18-212859.png" alt="Card 3" />
                    <h3>Fotos</h3>
                    <p>Em cada passo do cronograma
                    você pode tirar uma foto do
                    teu cabelo e, então, comparar
                    desde o primeiro até o último
                    dia de tratamento para ver teu
                    progresso</p>
                </div>
            </div>
        </div>
    );
};

export default Container2;