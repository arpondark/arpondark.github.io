import React from "react";
import Typical from "react-typical";
import ppic from '../../assets/profileimg.png'
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h1>Hey! I'm</h1>
          <h2 className="full-name">MD. Shazan Mahmud Arpon</h2>
          <h2>
            I'm a
            <Typical
              steps={[
                " Full Stack Developer",
                1000,
                " Fronted Developer",
                1000,
                " Backend Developer",
                1000,
                " MERN Stack Developer",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
            beatae natus labore tempora similique dicta error minus veniam
            reprehenderit aperiam cumque magnam fuga quibusdam.
          </p>
          <div className="pay">
            <button>Hire Me</button>
          </div>
          <div className="profile-img">
             <img src={ppic} alt="" />
             <div className="circle1"></div>
             <div className="circle2"></div>
             


          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
