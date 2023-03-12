import PrimaryShape from "../../components/primaryShape";
import styles from './styles.module.sass'
import worksData from '../../data/works'
import { Link } from 'react-router-dom'
import {FiArrowUpRight} from 'react-icons/fi'
import {WorkTypes} from '../../data/works'

type componentWorkType = {
    work:WorkTypes
}

function Work(work: componentWorkType) {
    return (
        <div className={styles.work}>
            <div className={styles.title}>
                <div className={styles.shapeContainer}>
                    <PrimaryShape />
                </div>
                <h3>
                    {work.work.name}
                </h3>
            </div>
            <div className={styles.stack}>
                {
                    work.work.stack.map(t => {
                        return (
                            <span style={{color:t.color,border:`1px solid ${t.color}`}}>{t.name}</span>
                        )
                    })
                }
            </div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link to={`/works/${work.work.name}`}>
                    <img src={work.work.thumb} alt="project image" />
                    </Link>
                </div>
                <div className={styles.description}>
                <Link className={styles.link} to={`/works/${work.work.name}`}>Ver mais <FiArrowUpRight/></Link>
                <p>{work.work.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Work;