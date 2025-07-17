import "./index.scss";
import "../home.scss";
import "../../components/contactCard/index.scss";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";
import { FaWhatsapp } from "react-icons/fa6";
import ContactCard from "../../components/contactCard";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Services() {
  return (
    <DashboardLayout>
      <div className="services">
        <div className="home__top">
          <h1 className="home-title">Services</h1>
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
          I offer a range of services that can help you launch your next
          project, build your software product, or enhance your existing
          product. I have experience delivering high-quality MVP, web
          applications, mobile apps, and more.
        </p>
        {/* <div className="service-cta">
                    <Link href="whatsapp://send?phone=2347017915992" className="service-cta__btn">
                        <FaWhatsapp />
                        <span>
                            Send a message
                        </span>
                    </Link>
                </div> */}
        <div className="services__card__wrapper">
          <div className="services__card__inner__wrapper">
            <div className="services__card">
              <h3 className="services__card_header">Frontend Development</h3>
              <p className="services__card_description">
                i have experience building fast, accessible, and responsive user
                interfaces that look great across all devices. Whether it’s a
                landing page or a full-scale web app, I focus on clean design,
                performance, and user experience.
              </p>
              <ul>
                <li>
                  <span>Frameworks: React.js, Vue.js, Next.js</span>
                </li>
                <li>
                  <span>Styling: Tailwind CSS, SCSS, Styled Components</span>
                </li>
                <li>
                  <span>UX: Responsive design, A11Y best practices</span>
                </li>
                <li>
                  <span>State Management: Redux, Pinia, Context API</span>
                </li>
                <li>
                  <span>Testing: Jest, Cypress</span>
                </li>
                <li>
                  <span>API Integration: REST, GraphQL (Axios, Apollo)</span>
                </li>
              </ul>
              <div className="services__card__cta">
                <Link href="https://calendly.com/ekweozorinnocent/consultation">
                  <span>Schedule a call</span>
                </Link>
                <Link href="whatsapp://send?phone=2347017915992">
                  <FaWhatsapp />
                  <span>Send a message</span>
                </Link>
              </div>
            </div>
            <div className="services__card">
              <h3 className="services__card_header">Backend Development</h3>
              <p className="services__card_description">
                I develop secure, scalable backend systems and APIs that power
                modern web and mobile apps. From authentication to cloud
                deployment, I build with performance and maintainability in
                mind.
              </p>
              <ul>
                <li>
                  <span>Frameworks: Node.js, Express.js, NestJS</span>
                </li>
                <li>
                  <span>Databases: MongoDB, PostgreSQL, MySQL</span>
                </li>
                <li>
                  <span>Auth & Security: JWT, OAuth2, sessions</span>
                </li>
                <li>
                  <span>API Design: REST, </span>
                </li>
                <li>
                  <span>Cloud & DevOps: AWS, Render, Vercel, Netlify</span>
                </li>
              </ul>
              <div className="services__card__cta">
                <Link href="https://calendly.com/ekweozorinnocent/consultation">
                  <span>Schedule a call</span>
                </Link>
                <Link href="whatsapp://send?phone=2347017915992">
                  <FaWhatsapp />
                  <span>Send a message</span>
                </Link>
              </div>
            </div>
            <div className="services__card">
              <h3 className="services__card_header">
                Full Product Builds & Enhancements
              </h3>
              <p className="services__card_description">
                From planning to deployment and ongoing optimization, I handle
                the complete lifecycle of digital product development — web
                apps, mobile apps, admin dashboards, and more.
              </p>
              <ul>
                <li>
                  <span>Full-stack architecture</span>
                </li>
                <li>
                  <span>Responsive UI & UX design</span>
                </li>
                <li>
                  <span>Scalable REST or GraphQL APIs</span>
                </li>
                <li>
                  <span>CI/CD, version control, and deployment pipelines</span>
                </li>
                <li>
                  <span>Performance tuning and feature enhancements</span>
                </li>
              </ul>
              <div className="services__card__cta">
                <Link href="https://calendly.com/ekweozorinnocent/consultation">
                  <span>Schedule a call</span>
                </Link>
                <Link href="whatsapp://send?phone=2347017915992">
                  <FaWhatsapp />
                  <span>Send a message</span>
                </Link>
              </div>
            </div>

            <div className="services__card">
              <h3 className="services__card_header">
                Technical Writing & Documentation
              </h3>
              <p className="services__card_description">
                I create clear, developer- and user-friendly documentation for
                projects of any scale, helping teams stay aligned and ensuring
                maintainability.
              </p>
              <ul>
                <li>
                  <span>API documentation</span>
                </li>
                <li>
                  <span>Developer handoff docs</span>
                </li>
                <li>
                  <span>User guides & walkthroughs</span>
                </li>
                <li>
                  <span>Blog posts, changelogs, and release notes</span>
                </li>
              </ul>
              <div className="services__card__cta">
                <Link href="https://calendly.com/ekweozorinnocent/consultation">
                  <span>Schedule a call</span>
                </Link>
                <Link href="whatsapp://send?phone=2347017915992">
                  <FaWhatsapp />
                  <span>Send a message</span>
                </Link>
              </div>
            </div>
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
