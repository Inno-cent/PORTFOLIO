"use client";
import Link from "next/link";
import DashboardLayout from "../components/DashboardLayout";
import "./home.scss";
import ProjectCard from "./projects/ProjectCard";
import BlogCard from "../components/blogCard";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { GoArrowUp } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiBlackBook } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import ContactCard from "../components/contactCard";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  // const {blogsPreview, loading, error} = useFetchBlogs({ contentType: "blogPage" });
  const [showMore, setShowMore] = useState(false);
  const profession = [
    // {
    //     role: "Product Manager",
    //     description: "Ample experience working with cross-functional teams to deliver products that meet the needs of users and businesses.",
    //     img: "/product__management.svg",
    // },
    {
      role: "Web Developer",
      description:
        "Experience working closely with developers to build web and mobile applications that solve real problems. Doing things with React, Next.js, and Python.",
      img: "/project-new.svg",
    },
    {
      role: "Technical Writer",
      description:
        "Experience writing articles, white papers, blogs, technical documentation, user guides, and product research papers.",
      img: "/writing-hand-medium-skin.svg",
    },
  ];

  const handleCardClick = (index) => {
    setShowMore(showMore === index ? null : index);
  };

  return (
    <DashboardLayout>
      <div className="home">
        <div className="home__top">
          <h1 className="home-title">
            Hey👋, I'm{" "}
            <span className="typewriter-text">
              <Typewriter
                words={["Innocent!", "a Software Developer", "a Writer!"]}
                loop={false}
              />
            </span>
          </h1>
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
          Ekweozor Innocent Obinna — software developer with 4+ years of
          experience in building intuitive, efficient, and user-centered
          software solutions. Known for a strong problem-solving mindset,
          attention to detail, and collaborative team spirit.
        </p>
        <div className="professional__summary">
          <div className="professional__summary_wrapper">
            {profession.map((card, index) => (
              <div
                key={index}
                className="professional__summary_card"
                onClick={() => handleCardClick(index)}
              >
                <img src={card.img} alt={card.title} />
                <div className="professional__summary_card_top">
                  <h4>{card.role}</h4>
                  <GoArrowUp
                    className={showMore === index ? "active" : "inactive"}
                  />
                </div>
                <p className={showMore === index ? "active" : "inactive"}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="home_about__section">
          <h3 className="home_about__section-header">About Me</h3>
          <div className="home_about__section_wrapper">
            <div className="home_about__section_card">
              <HiOutlineAcademicCap />
              <h4>Academic Education</h4>
              <ul>
                <li>
                  Lagos state University - Electronics and computer engineering
                  <br />
                  <br />
                  2022 - 2024
                </li>
              </ul>
            </div>
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
                  Brooi - A vacation rental platform that connects property
                  owners with travelers.
                  <br />
                  <br />
                  Product Manager
                  <br />
                  <br />
                  2022 - 2025
                </li>
              </ul>
            </div>
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
          <div className="see-more">
            <Link href="/about">
              <span>View full profile</span>
              <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
        <div className="home__projects">
          <h3 className="home__projects-header">Work</h3>
          <div className="home_projects__wrapper">
            <ProjectCard
              projectImage="/brooi.jpg"
              projectTitle="Brooi"
              projectDescription="A vacation rental platform that helps you find the best vacation rentals in your city."
              alt="Brooi"
              projectYear="2023"
              link="/projects/brooi"
            />
            <ProjectCard
              projectImage="/lingroks.jpg"
              projectTitle="Lingroks"
              projectDescription="An AI powered translation and text-to-speech app that helps you translate and listen to text in different languages."
              alt="Lingroks"
              projectYear="2025"
              link="/projects/lingroks"
            />
          </div>
          <div className="see-more">
            <Link href="/projects">
              <span>View full work</span>
              <IoIosArrowRoundForward />
            </Link>
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
        <div className="home_blog">
          <h3 className="home_blog-header">Blog</h3>
          {/* <div className="home_blogs__wrapper">
                        {
                            blogsPreview.slice(0, 2).map((blog) => (
                                <BlogCard
                                key={blog.sys.id}
                                title={blog.fields.title}
                                date={blog.fields.date}
                                tag={blog.fields.tag}
                                img={`${blog.fields.image.fields.file.url}?q=35`}
                                link={`/blog/${blog.fields.slug}`}
                                alt={blog.fields.image.fields.title}
                                />
                            ))
                        }
                    </div> */}
          <div className="see-more">
            <Link href="/blog">
              <span>Read More</span>
              <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
        <ContactCard />
      </div>
    </DashboardLayout>
  );
}
