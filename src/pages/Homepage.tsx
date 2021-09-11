import { useState } from "react";
import style from './Page.module.scss'
import { useMediaQuery } from 'react-responsive'

const Homepage = () => {

  const [clicked, setClicked] = useState<boolean>(false);

  const bigScreen = useMediaQuery({ query: '(min-width: 769px)' })
  const mobileTablet = useMediaQuery({ query: '(max-width: 769px)' })

  return (
    <div className={style.homepage}>
      {bigScreen &&
        <div className={style.menu}>
          <h1>
            <a className={style.link} href='/about'>
              <div className={`${style.hover} ${style.link} ${style.labelHello}`}></div>
            </a>
            <a className={style.link} href='/work'>
              <div className={`${style.hover} ${style.link} ${style.labeliam}`}></div>
            </a>
            <a className={style.link} href='/contact'>
              <div className={`${style.hover} ${style.link} ${style.labelName}`}></div>
            </a>
          </h1>
        </div>
      }
      {mobileTablet &&
        <div className={style.mobileTapArea} onClick={() => setClicked(!clicked)}>
          <div className={style.menu}>
            <h1>
              <div className={`${style.mobileLabel} ${style.link}`} style={{ display: clicked ? 'none' : 'block' }}>Hello.</div>
              <a href='/about'>
                <div className={`${style.mobileLabelActive} ${style.link}`} style={{ display: clicked ? 'block' : 'none' }}>About</div>
              </a>
              <div className={`${style.mobileLabel} ${style.link}`} style={{ display: clicked ? 'none' : 'block' }}>I am</div>
              <a href='/work'>
                <div className={`${style.mobileLabelActive} ${style.link}`} style={{ display: clicked ? 'block' : 'none' }}>Work</div>
              </a>
              <div className={`${style.mobileLabel} ${style.link}`} style={{ display: clicked ? 'none' : 'block' }}>Hieu Ng</div>
              <a href='/contact'>
                <div className={`${style.mobileLabelActive} ${style.link}`} style={{ display: clicked ? 'block' : 'none' }}>Contact</div>
              </a>
            </h1>
          </div>
          <div className={style.mobileIndicator}>tap anywhere</div>
        </div>
      }
      <div className={style.bgphoto}>
      </div>
    </div >
  )
}

export default Homepage;
