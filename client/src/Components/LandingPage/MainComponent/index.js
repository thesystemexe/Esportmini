import React from "react";
import "./styles.css";
import nui from "../../../Assests/nui.webp";
import { motion } from "framer-motion";
import Button from "../../Common/Button";

function MainComponent() {
  return (
    <>
      <div className="body-content">
        <div className="left-body">
          <motion.h1
            className="heading-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to Esport
          </motion.h1>
          <motion.h1
            className="heading-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
          >
            A Place for All gamer
          </motion.h1>
          <motion.h3
            className="heading-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Want to participate in tournament and share with your friends ?
          </motion.h3>
          <motion.div
            className="btns"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.25, duration: 1 }}
          >
            <a href="./Tournament">
              <Button text={"Tournament"}></Button>
            </a>
            <a href="">
              <Button text={"Share app"} outlined={true}></Button>
            </a>
          </motion.div>
        </div>
        <div className="right-body">
          <motion.img
            className="nui-image"
            src={nui}
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default MainComponent;
