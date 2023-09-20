import React from "react";
import Styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div>
      <div className={Styles.center}>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
