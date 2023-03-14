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
                    <p>23 anos, formado em análise desenvolvimento de sistemas. Tenho mais de 2 anos de experiência com desenvolvimento web através de projetos voluntários.
                    Minhas principais habilidades são: <span className={styles.spanJs}>Javascript</span>, <span className={styles.spanReact}>ReactJs</span>, <span className={styles.spanNode}>NodeJs</span> e <span className={styles.spanSql}>SQL</span>, além de conhecimentos em Java, Angular e PHP.</p>

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
