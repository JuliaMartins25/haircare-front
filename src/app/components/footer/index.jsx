import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img 
                    src="https://logodownload.org/wp-content/uploads/2017/04/disponivel-google-play-badge.png" 
                    alt="Google Play" 
                    className={styles.storeBadge}
                />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img 
                    src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" 
                    alt="Apple Store" 
                    className={styles.storeBadge}
                />
            </a>
        </footer>
    );
};

export default Footer;