import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "./Data";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion/dist/framer-motion";
import { carAnimation } from "./Animations";
import NProgress from 'nprogress'

const Car = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const singleCar = Data.find((item) => item.id === parseInt(id))
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    handleStop()
  }, [])

  const DelayAndGo = (e, to) => {
    NProgress.start()
    e.preventDefault();
    setTimeout(() => navigate(-1), 600);
  }

  const handleStop = () => {
    NProgress.done()
  }

  return (
    <div className="carcontainer">
      <motion.div
        variants={carAnimation}
        animate="show"
        exit="hide"
        className="car"
      >
        <div className="navigateBack" onClick={DelayAndGo}>
          <MdKeyboardBackspace/>
        </div>
        <div className="imageAndText">
          <img src={`../images/products/${singleCar.image}`} alt="Car" />
          <div className="carText">
            <h3>{singleCar.car}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              delectus ea dolore suscipit. Facilis harum dolorem, pariatur ipsa
              in adipisci!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Car