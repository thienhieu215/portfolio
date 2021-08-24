import React, { useState, useEffect } from 'react';
import style from './ScrollTop.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {visible &&
        <button onClick={scrollToTop} className={style.btn} >
          <ExpandLessIcon className={style.arrow}/>
        </button>
      }
    </>
  );
}

export default ScrollButton;
