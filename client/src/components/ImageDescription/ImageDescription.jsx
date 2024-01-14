import React from 'react'
import styles from'./ImageDescription.module.css'
import IMG1 from '../../images/Image2.jpg'
import IMG2 from '../../images/Image1.jpg'

const ImageDescription = ({position, text}) => {
  return (
    <div className={position==='right'? styles.containerRightImage : styles.containerLeftImage}>
      <div className={styles.image}>
        <img src={position==='right'? IMG1 : IMG2} alt="" />
      </div>
      <div className={styles.description}>{text}</div>
    </div>
  )
}

export default ImageDescription
