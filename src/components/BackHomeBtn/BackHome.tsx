import React, { useState, useEffect } from 'react';
import style from './BackHome.module.scss'

const ScrollButton = () => {

  return (
    <div className={style.logo}>
      <div className={style.logoInner}>
        <a href='/'>
          <div className={`${style.labelHomepage} ${style.hover} ${style.animation}`}>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ScrollButton;
