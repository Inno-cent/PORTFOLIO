import "./index.scss";
import "../home.scss";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "../../components/contactCard";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiBlackBook } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function About() {
  return (
    <DashboardLayout>
      <div className="about-page">
        <div className="home__top">
          <h1 className="home-title">About Me</h1>
          <div className="availability">
            <div className="available">
              <div className="green_blink"></div>
              <span>Available for work</span>
            </div>
            <div className="contact-btn">
              <Link href="/contact">
                <span>Contact Me</span>
              </Link>
            </div>
          </div>
        </div>
        <p className="home-about">
          I’m a full-stack developer who enjoys building both web and mobile
          applications that are intuitive, responsive, and solve real user
          problems. From crafting seamless front-end experiences to architecting
          scalable back-end systems, I’ve worked on diverse projects that bring
          ideas to life across platforms. I focus on writing clean, maintainable
          code and creating solutions that not only function well, but also feel
          great to use — making interactions enjoyable for users.
        </p>
        <div className="about__section_wrapper">
          <div className="home_about__section_card">
            <HiOutlineAcademicCap />
            <h4>Academic Education</h4>
            <ul>
              <li>
                Lagos state University - Electronics and computer engineering
              </li>
            </ul>
          </div>
          {/* <div className="home_about__section_card">
                                            <GiBlackBook />
                                            <h4>
                                                Non-Formal Education
                                            </h4>
                                            <ul>
                                            <li>
                                                University of Alberta - Software product management (Coursera)<br /><br/>
                                                2023<br /><br/>
                                                <a href="https://coursera.org/share/3c07f0c2133d85e778013d95c05420bb">
                                                    See Certificate
                                                </a>
                                                </li>
                                                <li>
                                                Scrum Master Certification (Coursera)<br /><br/>
                                                2023<br /><br/>
                                                <a href="https://coursera.org/share/e388bd12ce23fd10d5a38b01d8e340c5">
                                                    See Certificate
                                                </a>
                                                </li>
                                                <li>
                                                    Python complete course - NitHub (University of Lagos)<br /><br/>
                                                    2025
                                                </li>
                                                <li>
                                                React Deep Dive (Educative)<br /><br/>
                                                2024
                                                </li>
                                            </ul>
                                        </div> */}

          <div className="home_about__section_card">
            <GiBlackBook />
            <h4>Non-Formal Education</h4>
            <ul>
              <li>
                Python complete course - Libit
                <br />
                <br />
                2023
              </li>
            </ul>
          </div>
          <div className="home_about__section_card">
            <GoRocket />
            <h4>Experience</h4>
            <ul>
              <li>
                Alvonant - A tech outsourcing company that connects businesses
                with developers.
                <br />
                <br />
                intern fronntend developer
                <br />
                <br />
                2022
                <br />
                <br />
              </li>
              <li>
                Brooi - A vacation rental platform that connects property owners
                with travelers.
                <br />
                <br />
                Product Manager
                <br />
                <br />
                2022 - 2024
                <br />
                <br />
                <a href="https://www.brooi.com">See Project</a>
              </li>
              <li>
                Lingroks - An AI powered text and audio translator that helps
                you learn new languages.
                <br />
                <br />
                Lead frontend engineer
                <br />
                <br />
                2024 - 2025
                <br />
                <br />
                <a href="https://www.lingroks.live">See Project</a>
              </li>
              {/* <li>
                                                Nithub - A tech hub where students can build to become software engineers.<br /><br/>
                                                Frontend Developer (6 months programme)<br /><br/>
                                                2025<br /><br/>
                                                </li> */}
            </ul>
          </div>
          {/* <div className="home_about__section_card">
            <LiaCertificateSolid />
            <h4>Certifications</h4>
            <ul>
              <li>
                Project Management Professional (PMP) - PMI -- In view
                <br />
                <br />
                2025
              </li>
            </ul>
          </div> */}
          <div className="home_about__section_card">
            <LiaCertificateSolid />
            <h4>Certifications</h4>
            <ul>
              <li>
                Google cloud (GCP) - GADTP
                <br />
                <br />
                2025
              </li>
            </ul>
          </div>
        </div>

        <div className="home_stacks">
          <h3 className="home_stacks-header">Stacks</h3>
          <div className="home__stacks_wrapper">
            <div className="home__stack_card">
              <img src="/nodejs.svg" alt="nodejs" />
              <h4>Nodejs</h4>
            </div>
            <div className="home__stack_card">
              <img src="/vue.svg" alt="vue" />
              <h4>Vue</h4>
            </div>
            <div className="home__stack_card">
              <img src="/react-logo.svg" alt="react" />
              <h4>React</h4>
            </div>
            <div className="home__stack_card">
              <img src="/postman.svg" alt="postman" />
              <h4>API Testing</h4>
            </div>
            <div className="home__stack_card">
              <img src="/nextjs.svg" alt="nextjs" />
              <h4>Nextjs</h4>
            </div>
            <div className="home__stack_card">
              <img src="/github.svg" alt="github" />
              <h4>Github</h4>
            </div>
          </div>
          <div className="see-more">
            <Link href="/stack">
              <span>View full stack</span>
              <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
        <ContactCard />
      </div>
    </DashboardLayout>
  );
}
