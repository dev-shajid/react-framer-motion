import {useState} from 'react'
import './Filter.css';
import Data from './Data'
import { motion } from "framer-motion/dist/framer-motion";
import { AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { gridAnimation, productAnimation, h3Animation, cardAnimation } from "../Cars/Animations";

function Filter() {
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    NProgress.done()
  }, [])

  const [product, setProduct] = useState(Data)
  const [item, setItem] = useState('all')
  const [image, setImage] = useState()

  const filter = (item) => {
    item==='all'?setProduct(Data):setProduct(Data.filter(e => e.title === item))
    setItem(item)
  }
  return (
    <>
      <AnimatePresence>
      <motion.div className="container filter_container">
          <motion.div className="row">
            <motion.div
              variants={h3Animation}
              animate="show"
              exit="hide"
              className="col-lg-12 text-center">
                <ul>
                    <li onClick={()=>filter('all')} className={item==="all"?"active":null}>all</li>
                    <li onClick={()=>filter('phone')} className={item==="phone"?"active":null}>phone</li>
                    <li onClick={()=>filter('leptop')} className={item==="leptop"?"active":null}>leptop</li>
                    <li onClick={()=>filter('watch')} className={item==="watch"?"active":null}>watch</li>
                </ul>
              </motion.div>
          </motion.div>
          <motion.div
            variants={gridAnimation}
            animate="show"
            exit="hide"
            className="row box-list"            
          >
              {
                product.map((e,i)=>(
                  <motion.div
                    key={i}
                    className={`col-lg-4 box-item ${image?.id === e.id ? 'image_active' : null}`}
                  >
                    <motion.div
                      variants={cardAnimation}
                      animate="show"
                      exit="hide"
                    >
                      <motion.img
                        onClick={()=>image===null?setImage(e):setImage(null)}
                        layoutId
                        src={e.image} alt="Img"
                      />
                    </motion.div>
                  </motion.div>
                ))
              }
          </motion.div>
      </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Filter;