import {HiMail} from 'react-icons/hi'
import {IoLogoLinkedin} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io'

import styles from './styles.module.sass'

function Footer() {
    return ( 
        <div className={styles.footer}>
            <div className={styles.contacts}>
                <a href="https://www.linkedin.com/in/llicar/" target="_blank" rel="noopener">
                    <IoLogoLinkedin className={styles.icon} size={'7vh'}/>
                </a>
                <a href="https://github.com/llicar" target="_blank" rel="noopener">
                    <IoLogoGithub className={styles.icon} size={'7vh'}/>
                </a>
                <a href="mailto:lucas.licar.sousa@gmail.com" target="_blank" rel="noopener">
                    <HiMail className={styles.icon} size={'7vh'}/>
                </a>
            </div>
        </div> 
    );
}

export default Footer;