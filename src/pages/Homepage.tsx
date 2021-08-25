import React from "react";
import style from './Page.module.scss'

const Homepage = () => {

  return (
    <div className={style.homepage}>
      <div className={style.menu}>
        <h1 >
          {/* <div style={{ position: 'relative', display: 'block', overflow: 'hidden' }}> */}
            <a className={style.link} href='/about'>
              <div className={`${style.hover} ${style.link} ${style.color} ${style.labelHello}`}></div>
            </a>
          {/* </div> */}
          {/* <div style={{ position: 'relative', display: 'block', overflow: 'hidden' }}> */}
            <a className={style.link} href='/work'>
              <div className={`${style.hover} ${style.link} ${style.color} ${style.labeliam}`}></div>
            </a>
          {/* </div> */}
          {/* <div style={{ position: 'relative', display: 'block', overflow: 'hidden' }}> */}
            <a className={style.link} href='/contact'>
              <div className={`${style.hover} ${style.link} ${style.color} ${style.labelName}`}></div>
            </a>
          {/* </div> */}
        </h1>
      </div>
      <div className={style.bgphoto}>
      </div>
    </div>
  )
}

export default Homepage;
