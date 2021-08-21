import React from "react";
import style from './Page.module.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {

  return (
    <div className={style.contact}>
      <div className={style.maxWidth}>
        <div className={style.topBottomMargin}>
          <div className={style.hideTextBlock}>
            <h2 className={style.h2}>Let's get connected .</h2>
          </div>
          <div className={style.maxWidth70}>
            <h4>Contact</h4>
            <div className={style.text}>
              <p>
                Below are the links to my social media accounts.
                Feel free to reach me out through any platforms below:
              </p>
            </div>
            <div className={style.icons}>
              <a href="https://www.linkedin.com/in/thienhieu215/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className={style.icon} />
              </a>
              <a href="https://github.com/thienhieu215" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className={style.icon} />
              </a>
              <a href="https://www.facebook.com/thienhieu215/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className={style.icon} />
              </a>
              <a href="https://www.instagram.com/thienhieu.ng/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className={style.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;