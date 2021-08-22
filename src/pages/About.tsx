import React from "react";
import style from './Page.module.scss'
import img from '../files/3x4.jpg'
import pdf from '../files/Resume.pdf'
import ScrollTopBtn from '../components/ScrollTopBtn/ScrollTop'
import HomeBtn from '../components/BackHomeBtn/BackHome'

const About = () => {

  return (
    <div className={style.about}>
      <div className={style.maxWidth}>
        <HomeBtn />
        <div className={style.topBottomMargin}>
          <div className={style.hideTextBlock}>
            <h2 className={style.h2}>
              A junior front-end developer
            </h2>
          </div>
          <div className={style.img}>
            <img draggable='false' src={img} alt="No Photo" />
          </div>
          <div className={style.maxWidth70}>
            <p className={style.fontLarge}>Hello, my name is Nguyen Duc Thien Hieu and I am a Junior Front-End developer with experience working with ReactJS.</p>
            <div className={style.text}>
              <p>
                I am a fresh graduate of Bachelor of Information Technology from RMIT Vietnam University with strengths in front-end development.
                Currently, I am pursuing ReactJS along with related libraries.
              </p>
              <p>
                In terms of work experience, I had opportunities to practice the knowledge learned through group projects in courses at RMIT.
                Also in my senior year, I spent 3 months internship at TMA Solutions as a front-end developer.
                My personal projects and school projects are listed and described in the Work section.
              </p>
              <p>
                In addition, I am an active participant in the movement.
                I used to be a member of the RMIT basketball club participating in competitions as well as helping to organize the annual tournaments.
                Besides, I also participated in environmental protection events of RMIT Green Generation Club.
              </p>
              <p>You can read more about my skills, experience, education and much more in the PDF attached below:</p>
            </div>
            <div>
              <a href={pdf} target='_blank'>My resume (pdf 119KB)</a>
            </div>
          </div>
        </div>
      </div>
      <ScrollTopBtn />
    </div>
  )
}

export default About;
