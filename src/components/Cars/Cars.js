import React, { useEffect } from "react";
import Data from "./Data";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "./Animations";
import NProgress from 'nprogress'

const Cars = ({ setProgress }) => {
  const navigate = useNavigate();
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    handleStop()
  }, [])

  const DelayAndGo = (e, to) => {
    NProgress.start()
    e.preventDefault();
    setTimeout(() => navigate(`/car/${to}`), 600);
  }

  const handleStop = () => {
    NProgress.done()
  }

  return (
    <div className="carsContainer">
      <motion.h3
        variants={h3Animation}
        animate="show"
        exit='hide'
      >
        Choose Your Car
      </motion.h3>
      <motion.div
        variants={gridAnimation}
        animate="show"
        exit="hide"
        className="cars">
        {Data.map((item, index) => {
          return (
            <Link onClick={(e) => DelayAndGo(e, item.id)} key={index} to={`/car/${item.id}`}>
              <motion.div
                variants={cardAnimation}
                className="card"
              >
                <img src={`../images/products/${item.image}`} alt="Car" />
              </motion.div>
            </Link>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Cars