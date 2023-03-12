import styles from "./styles.module.sass"
import PrimaryShape from "../../components/primaryShape"
import Work from "../../components/work"
import worksData from '../../data/works'
import Footer from "../../components/footer"
function App() {
    return (
        <>
        <div className={styles.container}>
            <section className={styles.hi}>
                <h1>
                    Olá
                </h1>
                <h2>
                    Prazer, meu nome é <span>Lucas</span>, e sou desenvolvedor web.
                </h2>
            </section>
            <div className={styles.shapeContainer}>
                <PrimaryShape></PrimaryShape>
            </div>

            <section id="about" className={styles.about}>
                    <h1>Sobre mim</h1>
                    <p>Sou um desenvolvedor web formado em Análise e Desenvolvimento de Sistemas, com mais de 2 anos de experiência em projetos voluntários. Minhas principais habilidades são em <span className={styles.spanJs}>Javascript</span>, <span className={styles.spanReact}>ReactJS</span>, <span className={styles.spanNode}>NodeJS</span> e <span className={styles.spanSql}>SQL</span>, além de conhecimentos em Java, Angular e PHP.</p>

            </section>

            <section id="works" className={styles.works}>
                <h1>Trabalhos</h1>
                <div className={styles.workContainer}>
                    {
                        worksData.map((w)=>{
                            return(
                                <Work work={w}></Work>
                            ) 
                        })
                    } 
                </div>
            </section>
        </div>
        <div id="contacts">
        </div>
        </>
    )
}
export default App
