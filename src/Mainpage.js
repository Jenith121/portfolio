import { useRef, useState } from "react";
import BG1 from "./images/photo.jpg";
import bg3 from "./images/bg3.png";
import tuneimg from "./images/tunehub.png";
import stage from "./images/burger.jpg";
import "./Mainpage.scss";
import {
  FaBars,
  FaBuildingColumns,
  FaCss3Alt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJs,
  FaLinkedinIn,
  FaReact,
  FaJava,
  FaSass,
  FaSchool,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
function Mainpage() {
  const [show, setShow] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const scroll = (ref) => {
    ref.current.scrollIntoView({ behaviour: "smooth", block: "start" });
  };
  return (
    <div id="Main">
      <header>
        <div className="navbar">
          <div id="navpart1">
            <div>
              <img src={BG1} alt="404" />
            </div>
            <h2>JENITHRAJ</h2>
          </div>
          <div id="navpart2">
            <h4 onClick={() => scroll(ref1)}>Home</h4>
            <h4 onClick={() => scroll(ref2)}>About</h4>
            <h4 onClick={() => scroll(ref3)}>Education</h4>
            <h4 onClick={() => scroll(ref4)}>Projects</h4>
            <h4 onClick={() => scroll(ref5)}>Contact</h4>
          </div>
          <FaBars className="bars" onClick={() => setShow(!show)} />
          {show && (
            <div id="float">
              <h4 onClick={() => scroll(ref1)}>Home</h4>
              <h4 onClick={() => scroll(ref2)}>About</h4>
              <h4 onClick={() => scroll(ref3)}>Education</h4>
              <h4 onClick={() => scroll(ref4)}>Projects</h4>
              <h4 onClick={() => scroll(ref5)}>Contact</h4>
            </div>
          )}
        </div>
      </header>
      <main>
        <div className="Home" ref={ref1}>
          <div>
            <h1>Hey,I'm Jenithraj</h1>
            <p>
              A Result-Oriented Web Developer building and managing Websites and
              Web
            </p>
            <p>
              Applications that leads to the success of the overall product.
            </p>
          </div>
        </div>
        <div className="about" ref={ref2}>
          <div className="abouthead">
            <h1>About Me</h1>
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms
            </p>
            <p>of programming and technology</p>
          </div>
          <div className="aboutpart1">
            <h1>Get to Know Me !</h1>
            <p>
              I'm a <b>Frontend Focused Web Developer</b> building and managing
              the Front-end of <b>Websites </b>and <b>Web Applications</b> that
              leads to the success of the overall product. Check out some of my
              work in the Projects section.
            </p>
            <p>
              To enhance my professional skills, capabilities and knowledge in
              an organization which recognizes the value of hard work and trusts
              me with <b>responsibilities</b> and <b>challenges</b>
            </p>
            <p>
              I'm open to <b>Job</b> opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my{" "}
              <b>skills</b> and experience then don't hesitate to contact me.
            </p>
            <button onClick={() => scroll(ref5)}>Contact</button>
          </div>
          <div className="aboutpart2">
            <h1>My skills</h1>
            <div>
              <FaHtml5 color="#0C359E" className="i" />
              <h2>HTML-5</h2>
            </div>
            <div>
              <FaCss3Alt color="orange" className="i" />
              <h2>CSS-3</h2>
            </div>
            <div>
              <FaJs color="green" className="i" />
              <h2>Javascript</h2>
            </div>
            <div>
              <FaReact color="#59D5E0" className="i" />
              <h2>React.js</h2>
            </div>
            <div>
              <FaJava color="darkgreen" className="i" />
              <h2>Java</h2>
            </div>

            <div>
              <FaSass color="pink" className="i" />
              <h2>SASS</h2>
            </div>
          </div>
        </div>
        <div ref={ref3} className="education">
          <h1>Education</h1>
          <div className="content">
            <div className="box1">
              <FaSchool className="i" />
              <p>Vidya Sikshaa Matric Higher Secondary School</p>
              <h3>SSLC-94%</h3>
              <p>2016-2017</p>
            </div>
            <div className="box2">
              <FaBuildingColumns className="i" />
              <p>KCM Matric Higher Secondary School</p>
              <h3>HLC-75%</h3>
              <p>2018-2019</p>
            </div>
            <div className="box3">
              <FaGraduationCap className="i" />
              <p>Anna University Regional Campus Coimbatore</p>
              <h3>B.E-EEE(82%)</h3>
              <p>2019-2023</p>
            </div>
          </div>
          <div className="course">
            <h2>Course</h2>
            <p>
              I have done 6 months certifitied course in Full Stack Web
              Development in Kodnest-Bangalore.
            </p>
          </div>
        </div>
        <div className="project" ref={ref4}>
          <h1>Projects</h1>
          <div className="content">
            <div>
              <img src={tuneimg} alt="404" />
            </div>
            <div className="cont cont1">
              <h2>TuneHub Music Streaming Web App(Spring Boot, Thymeleaf)</h2>
              <p>
                <b>Description :</b> Deveploped a music streaming web app using
                Spring Boot and Thymeleaf. Managed backend functionality,
                integrated APIs. Designed the app using Html,css
              </p>
            </div>
            <div className="small">
              <img src={stage} alt="404" />
            </div>
            <div className="cont cont2">
              <h2>The Stage Restaurant</h2>
              <p>
                <b>Description :</b>This project is a modern and responsive
                restaurant website design to enchance the dinig experience by
                showcasing the unique offerings. The website serves as adigital
                hub for customer to explore the menu, learn about the
                restaurant's story.
              </p>
            </div>
            <div className="large">
              <img src={stage} alt="404" />
            </div>
            <div>
              <img src={bg3} alt="404" />
            </div>
            <div className="cont cont1">
              <h2>Small Projects</h2>
              <p>
                <b>Projects :</b>Marvel card, Color flipper, Some Static
                template
              </p>
              <p>
                <b>Description :</b> For the basic understanding of the Web
                tools,I have developed some static responsive website with js.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer" ref={ref5}>
          <h1>Contact</h1>
          <h4>Phone</h4>
          <h2>8870994519</h2>
          <h4>E-mail</h4>
          <h2>
            <a href="mailto:jenithraj2001@gmail.com">jenithraj2001@gmail.com</a>
          </h2>
          <Link to="https://www.linkedin.com/in/jenithraj" className="linkin">
            <FaLinkedinIn />
          </Link>
          <Link to={"https://github.com/Jenith121"} className="linkin">
            <FaGithub />
          </Link>
        </div>
      </footer>
    </div>
  );
}
export default Mainpage;
