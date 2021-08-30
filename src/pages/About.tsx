import React from "react";
import style from './Page.module.scss'
import img from '../files/unnamed.jpg'
import pdf from '../files/Resume.pdf'
import ScrollTopBtn from '../components/ScrollTopBtn/ScrollTop'
import HomeBtn from '../components/BackHomeBtn/BackHome'

const About = () => {

  return (
    <div className={style.page}>
      <div className={style.maxWidth}>
        <HomeBtn />
        <div className={style.topBottomMargin}>
          <div className={style.hideTextBlock}>
            <h2 className={style.h2}>
              A junior front-end developer<span style={{color: '#E55B13'}}>.</span>
            </h2>
          </div>
          <div className={style.img}>
            <img draggable='false' src={img} alt="No Photo" />
          </div>
          <div className={style.maxWidth70}>
            <p className={style.fontLarge}>Hello, my name is Nguyen Duc Thien Hieu and I am a developer with experience in Front-End development.</p>
            <div className={style.text}>
              <p>
                I am a fresh graduate with a bachelor's degree in Information Technology at RMIT University Vietnam.
                Currently, I consider myself as a Junior Front-End Developer, with a background in working with ReactJS and related libraries.
              </p>
              <p>
                In terms of work experience, I had gained hands-on experience through group projects during courses at RMIT.
                This has also improved my teamwork skill as well.
                In my senior year, I had been through a 3-month internship at TMA solutions as a front-end developer.
                It was a great opportunity to review my knowledge and to participate in an industrial-level project.
              </p>
              <p>
                Besides, I also develop personal projects in my free time in order to enhance my skills.
                My projects are listed and described in the <span><a href='/work' className={style.text}> Work</a></span> section.
              </p>
              <p>
                In addition, I am an active participant in the movement.
                I was a member of the RMIT Basketball Club & RMIT Green Generation Club and participated in many club events.
              </p>
              <p>You can read more about my skills, experience, education and much more in the PDF attached below:</p>
            </div>
            <div className={style.fontLarge}>
              <a href={pdf} target='_blank'>My resume (pdf 119KB)</a>
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

export default About;
