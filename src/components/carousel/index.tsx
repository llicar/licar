
import styles from "./styles.module.sass"
import {motion} from 'framer-motion'
import {useState,useEffect,useRef} from 'react'

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
        <motion.div className={styles.inner}
          drag="x"
          dragConstraints={{right:0, left:-width}}
          initial={{x:0}}
          animate={{
            x: [-width,width],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            times: [0],
            repeat: Infinity,
          }}
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
