import React from "react";
import style from './Page.module.scss'

const Works = () => {

  return (
    <div className={style.contact}>
      <div className={style.maxWidth}>
        <div className={style.topBottomMargin}>
          <div className={style.hideTextBlock}>
            <h2 className={style.h2}>
              What I have done :
            </h2>
          </div>
          <div className={style.maxWidth70}>

            <div className={style.workBlock}>
              <a className={style.proj} href='/' target='_blank'>
                <h2 className={style.projName}>
                  Portfolio
                </h2>
                <p className={style.projDesc}>Brief description about me.</p>
              </a>
            </div>

            <div className={style.workBlock}>
              <a className={style.proj} href='/' target='_blank'>
                <h2 className={style.projName}>
                  Bookstore
                </h2>
                <p className={style.projDesc}>An online bookstore website project.</p>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Works;
