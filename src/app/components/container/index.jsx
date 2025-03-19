import styles from "./container.module.css";

const Container = () => {
    return (
        <div className={styles.container}>
            <header>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#funcoes">Funções</a></li>
                        <li><a href="#avaliacao">Avaliação</a></li>
                    </ul>
                </nav>
            </header>

            <section className={styles.inicio} id="home">
                <div className={styles.content}>
                    <h1>HAIR CARE</h1>
                    <p>
                        Hair Care cria e gerencia um cronograma capilar especialmente feito <br />
                        para o seu cabelo, baseado em um quiz com perguntas e testes para <br />
                        verificar o estado atual do seu cabelo.
                    </p>
                    <div className={styles.downloadButtons}>
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                            <img src="https://logodownload.org/wp-content/uploads/2017/04/disponivel-google-play-badge.png" alt="Google Play" />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <img src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" alt="Apple Store" />
                        </a>
                    </div>
                </div>

                <div className={styles.cllRight}>
                    <img src="https://i.ibb.co/k66Dn6Gg/Captura-de-tela-2025-03-18-142421-removebg-preview.png" alt="App Preview" />
                </div>
            </section>
        </div>
    );
}

export default Container;