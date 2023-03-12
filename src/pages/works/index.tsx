import { useParams } from "react-router-dom";
import useGetWork from "../../hooks/useGetWork";
import {IoLogoGithub} from 'react-icons/io'
import {RiPagesLine} from 'react-icons/ri'
import styles from "./styles.module.sass"
import PrimaryShape from './../../components/primaryShape/index';
import Carousel from './../../components/carousel/index';


function Works() {

    const work = useGetWork(useParams().name);

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h1> {work?.name} </h1>
                <div className={styles.shapeContainer}>
                <PrimaryShape/>
                </div>
                <h2>
                    {work?.description}
                </h2> 
                <div className={styles.links}>
                    {
                        work?.site? 
                        <a href={work?.site} target="_blank" rel="noopener"><RiPagesLine/>Site</a>   
                        :
                        false 
                    }
                    <a href={work?.repository} target="_blank" rel="noopener"><IoLogoGithub/>Repositório</a>
                </div>
            </div> 
            <Carousel images={work?.images || []}/>

            <section className={styles.stack}>
                <h1>Tecnologias utilizadas</h1>
                <div>
                    {work?.stack.map(item =>{
                        return(
                            <p style={{backgroundColor:item.color}}>{item.name}</p>
                        )
                    })}
                </div>
            </section>

            <section className={styles.history}>
                    <h1>
                        História
                    </h1>
                    <div>
                        <p>
                          {work?.about} 
                        </p>
                    </div>
            </section>

        </div>  
     );
}

export default Works;