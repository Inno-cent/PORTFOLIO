import ContactCard from "../../components/contactCard";
import DashboardLayout from "../../components/DashboardLayout";
import "./index.scss";
import StackCard from "./StackCard";
import Link from "next/link";

const Stack = () => {
  return (
    <DashboardLayout>
      <div className="stacks">
        <div className="home__top">
          <h1 className="home-title">Stack</h1>
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
          I'm a full-stack developer who enjoys building fast, scalable web apps
          using tools like React, Node.js, Express, MongoDB, and Next.js. I also
          use Figma, Notion, ClickUp, Trello, and Miro for everything from
          design collaboration to planning and task tracking. Whether it's
          mapping out a product roadmap, digging into the competition, or
          writing clean, maintainable code — I'm focused on solving real
          problems and creating great user experiences.
        </p>
        <div className="stacksCard-wrapper">
          <div className="stacksCard-inner-wrapper stacksCard-inner-wrapper-first">
            <h3>Developer skills</h3>
            <div className="stacks--item-grid">
              <StackCard
                title=" System Architecture"
                subtitle="I design scalable, maintainable, and efficient system architectures using modern tech stacks."
                logo="/sss.png"
                alt="System Architecture"
              />
              <StackCard
                title="Competitive Tech Evaluation"
                subtitle="I evaluate frameworks, libraries, and tools to choose the best technologies based on performance, maintainability, and community support."
                logo="/cte.png"
                alt="Competitive Tech Evaluation"
              />
              <StackCard
                title="User-Centered Development"
                subtitle="I build user experiences with direct input from users, usability tests, and UX research."
                logo="/ucd.png"
                alt="ser-Centered Development"
              />
              <StackCard
                title=" Startup Engineering"
                subtitle="I build user experiences with direct input from users, usability tests, and UX research."
                logo="/se.png"
                alt=" Startup Engineering"
              />
              <StackCard
                title="UI/UX Implementation"
                subtitle="I conduct competitive analysis to understand the market. My belief is that understanding the market is key to building successful products."
                logo="/uiux.png"
                alt="UI/UX Implementation"
              />
              <StackCard
                title="End-to-End Development"
                subtitle="I am able to manage the entire development cycle—from setting up back-end APIs to building responsive front-end interfaces."
                logo="/eted.png"
                alt="AI Product Management logo"
              />
              <StackCard
                title="Agile Development"
                subtitle="I follow Agile methodologies, working in sprints, writing user stories, and collaborating via tools like Jira or Trello."
                logo="/design.svg"
                alt="Agile Development"
              />
              <StackCard
                title="Deployment & DevOps"
                subtitle="I handle product deployments, CI/CD pipelines, Docker containers, and monitor product health post-launch."
                logo="/development.svg"
                alt="Deployment & DevOps"
              />
              <StackCard
                title="Technical Strategy"
                subtitle="I help define technical direction, architectural patterns, and long-term engineering strategies aligned with product vision."
                logo="/ts.png"
                alt="Technical Strategy"
              />
              <StackCard
                title="Lifecycle Ownership"
                subtitle="I take ownership of features/products from ideation to maintenance, supporting through feedback cycles and iterations."
                logo="/lo.png"
                alt="Lifecycle Ownership"
              />
              <StackCard
                title="Performance & Usage Metrics"
                subtitle="I implement product analytics (GA, Mixpanel, custom dashboards) and use metrics to guide optimizations and feature improvements."
                logo="/pum.png"
                alt="Performance & Usage Metrics"
              />
            </div>
          </div>
        </div>
        <div className="stacksCard-wrapper">
          <div className="stacksCard-inner-wrapper">
            <h3>Tools</h3>
            <div className="stacks--item-grid">
              <StackCard
                title="Figma"
                subtitle="I use Figma in my day-to-day for wireframing, UX design, user flows and prototyping. Figma is my go-to tool for design."
                logo="/figma.svg"
                alt="Figma logo"
              />
              <StackCard
                title="ClickUp"
                subtitle="I use ClickUp for project management and task management. I believe I have a great understanding of ClickUp."
                logo="/ClickUp_idfty-HNVU_0.svg"
                alt="ClickUp logo"
              />
              <StackCard
                title="VS code"
                subtitle="i use vscode as my choice of code editor"
                logo="/vscode.svg"
                alt="vscode logo"
              />

              <StackCard
                title="Trello"
                subtitle="I use Trello for project management and task management. I believe I have a great understanding of Trello."
                logo="/trello.svg"
                alt="Trello logo"
              />
              <StackCard
                title="ChatGPT"
                subtitle="I use ChatGPT for generating ideas, researching and brainstorming."
                logo="/openai.svg"
                alt="ChatGPT logo"
              />
              <StackCard
                title="Docker"
                subtitle="I use docker for Containerization and environment setup"
                logo="/docker.svg"
                alt="ChatGPT logo"
              />
              <StackCard
                title="Slack"
                subtitle="I use Slack for communication and collaboration."
                logo="/slack.svg"
                alt="Slack logo"
              />
              <StackCard
                title="Zoom"
                subtitle="I use Zoom for video calls and meetings."
                logo="/zoom.svg"
                alt="Zoom logo"
              />
              <StackCard
                title="Google Workspace"
                subtitle="I use Google Workspace for email, calendar, docs and sheets."
                logo="/google.svg"
                alt="Google Workspace logo"
              />
              <StackCard
                title="Microsoft Office"
                subtitle="I use Microsoft Office for Word, Excel and PowerPoint."
                logo="/microsoft-5.svg"
                alt="Microsoft Office logo"
              />
              <StackCard
                title="Github"
                subtitle="I use Github for version control and collaboration on code bases."
                logo="/github.svg"
                alt="Github logo"
              />
              <StackCard
                title="Jira"
                subtitle="I use Jira for project management and issue tracking."
                logo="/jira.svg"
                alt="Jira logo"
              />
              <StackCard
                title="Amplitude"
                subtitle="I use Amplitude for product analytics and user behavior analytics. I am comfortable with Amplitude."
                logo="/amplitude.svg"
                alt="Amplitude logo"
              />
            </div>
          </div>
        </div>
        <div className="stacksCard-wrapper">
          <div className="stacksCard-inner-wrapper">
            <h3>Technical skills</h3>
            <div className="stacks--item-grid">
              <StackCard
                title="React"
                subtitle="I have experience working with React. I have built web applications with React. This portfolio is built with React.😊"
                logo="/react.svg"
                alt="React logo"
              />

              <StackCard
                title="Next.js"
                subtitle="I use Next.js for building scalable, SEO-friendly fullstack apps with server-side rendering."
                logo="/nextjs.svg"
                alt="Next.js logo"
              />

              <StackCard
                title="Node.js & Express"
                subtitle="I create robust backend APIs using Node.js and Express, handling routing, middleware, and server logic."
                logo="/nodejs.svg"
                alt="Node.js logo"
              />

              <StackCard
                title="JavaScript"
                subtitle="I have experience working with JavaScript. I believe I am an intermediate JavaScript developer."
                logo="/javascript.svg"
                alt="Node.js logo"
              />

              <StackCard
                title="MongoDB"
                subtitle="I work with MongoDB for flexible, document-based data storage and efficient querying with Mongoose."
                logo="/mongo.svg"
                alt="MongoDB logo"
              />

              <StackCard
                title="PostgreSQL"
                subtitle="I use relational databases like PostgreSQL for structured data, foreign keys, and powerful queries."
                logo="/postgresql.svg"
                alt="PostgreSQL logo"
              />

              <StackCard
                title="REST API"
                subtitle="I design clean, RESTful APIs that support scalable client-server communication."
                logo="/postman.svg"
                alt="API logo"
              />
              <StackCard
                title="HTML"
                subtitle="I have experience working with HTML. I have built websites with HTML."
                logo="/html.svg"
                alt="HTML logo"
              />
              <StackCard
                title="CSS"
                subtitle="I have experience working with CSS. I have styled websites with CSS."
                logo="/css.svg"
                alt="CSS logo"
              />
              <StackCard
                title="Python"
                subtitle="I have some experience working with Python. I have built projects with Python. I can regard myself as an intermediate Python developer."
                logo="/python.svg"
                alt="Python logo"
              />
              <StackCard
                title="Tailwind"
                subtitle="I have experience working with Tailwind CSS. I use Tailwind CSS for styling websites."
                logo="/tailwind.svg"
                alt="Git logo"
              />
              <StackCard
                title="API Integration"
                subtitle="I have experience integrating APIs. I have an understanding of how APIs work and how it affects the business."
                logo="/postman.svg"
                alt="Node.js logo"
              />
            </div>
          </div>
        </div>
        <ContactCard />
      </div>
    </DashboardLayout>
  );
};

export default Stack;
