import React from "react";
import style from './Page.module.scss'
import ScrollTopBtn from '../components/ScrollTopBtn/ScrollTop'
import HomeBtn from '../components/BackHomeBtn/BackHome'

const Works = () => {

  return (
    <div className={style.page}>
      <div className={style.maxWidth}>
        <HomeBtn />
        <div className={style.topBottomMargin}>
          <div className={style.hideTextBlock}>
            <h2 className={style.h2}>
              What I have done<span style={{color: '#E55B13'}}>:</span>
            </h2>
          </div>
          <div className={style.maxWidth70}>

            <div className={style.workBlock}>
              <a className={style.proj} href='https://github.com/thienhieu215/portfolio' target='_blank'>
                <h2 className={style.projName}>
                  Portfolio
                </h2>
                <p className={style.projDesc}>Brief description about me.</p>
              </a>
            </div>

            <div className={style.workBlock}>
              <a className={style.proj} href='https://github.com/thienhieu215/bookstore-react-typescript' target='_blank'>
                <h2 className={style.projName}>
                  Bookstore
                </h2>
                <p className={style.projDesc}>An online bookstore website project.</p>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className={style.bgphoto}>
      </div>
      <ScrollTopBtn />
    </div>
  )
}

export default Works;
