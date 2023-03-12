import styles from './styles.module.sass'

function Header() {
    return ( 
        <div className={styles.header}>
            <ul>
                <a href="/#about">
                    <li>Sobre</li>
                </a>
                <a href="/#works">
                    <li>Trabalhos</li>
                </a>
                <a href="/#contacts">
                    <li>Contatos</li>
                </a>
            </ul>
        </div>
     );
}

export default Header;