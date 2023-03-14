
import styles from "./styles.module.sass"
import {motion} from 'framer-motion'
import {useState,useEffect,useRef} from 'react'
import gesture from '../../assets/icons/gesture.png'

type CarouselTypes = {
  images:string[]
}


const Carousel = ({images}:CarouselTypes) => {

  console.log(images)

  const carousel:any = useRef()
  const [width,setWidth] = useState(0)

  useEffect(()=>{
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[carousel.current?.scrollWidth])


  return (
    <div>
      <motion.div ref={carousel} className={styles.container} whileTap={{cursor:"grabbing"}}>
      <img src={gesture} className={styles.gesture} />
        <motion.div className={styles.inner}
          drag="x"
          dragConstraints={{right:0, left:-width}}
        >
          {
            images.map((image)=>{
              console.log("imagem aquiwsrgrg")
              return(
                  <motion.div className={styles.item}>
                    <div>
                      <img src={image} alt="" />
                    </div>
                  </motion.div>
                )
            })
          }
          </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
