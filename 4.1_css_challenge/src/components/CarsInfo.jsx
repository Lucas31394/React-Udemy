import React from 'react'
import styles from './CarsInfo.module.css'

const CarsInfo = ({model, brand, color, year}) => {
  return (
    <div className={styles.card}>
        <h2 className={styles.car_title}>{model} - <span className={styles.car_brand}>{brand}</span></h2>
        <ul>
            <li>{color}</li>
            <li>{year}</li>
        </ul>
    </div>
  )
}

export default CarsInfo