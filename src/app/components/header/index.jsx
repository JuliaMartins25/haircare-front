import styles from "./header.module.css";

const Header = () => {
    return (
        <header>
            <div className={styles.nav}>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#funcoes">Funções</a></li>
                    <li><a href="#avaliacao">Avaliação</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;