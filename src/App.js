import "./App.scss";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const follows = [
  {
    icon: <LinkedInIcon sx={{ fontSize: "32px" }} />,
    link: "https://www.linkedin.com/in/yuweihu/",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: "32px" }} />,
    link: "https://www.instagram.com/ayowi/",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: "32px" }} />,
    link: "https://github.com/YuweiHu",
  },
];

function App() {
  return (
    <>
      <div class="side" />

      <section class="section section--hello" id="hello">
        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#intro">
              <span>#0</span>Hello
            </a>
            <h2>Cliff Hu.</h2>
            <ul class="anchornav">
              <li>
                <a href="#intro">Intro</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--intro" id="intro">
        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#intro">
              <span>#1</span>Intro
            </a>
            <h1>I am a Full-Stack Engineer based in Taiwan.</h1>
            <p class="lead">
              See my full resume on{" "}
              <a
                href="https://www.linkedin.com/in/yuweihu/"
                target="_blank"
                class="link"
                rel="noreferrer"
              >
                Linkedin
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section class="section section--about" id="about">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon points="100 0 100 10 0 10" />
        </svg>

        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#about">
              <span>#2</span>About
            </a>
            <h2>I'm familiar with React ecosystem.</h2>
            <p class="lead">Tech Stack</p>
            <p class="lead">Font-End: React / Redux / NuxtJS / tailwindcss</p>
            <p class="lead">Back-End: node.js / Express / MongoDB</p>
          </div>
        </div>
      </section>

      <section class="section section--clients" id="blog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon points="100 10 0 0 0 10" />
        </svg>

        <div class="section__inner">
          {/* <div style={{ border: "1ps solid red" }}> */}
          <a class="pre" href="#clients">
            <span>#3</span>Blog
          </a>
          <h2>
            I wrote my study notes and some technology articles in my blog.
          </h2>
          <p class="lead">
            <a
              href="https://ayowi-blog.netlify.app/"
              target="_blank"
              class="link"
              rel="noreferrer"
            >
              Take a look.
            </a>
          </p>
          {/* </div> */}
        </div>
      </section>

      <section class="section section--portfolio1" id="portfolio">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
        </svg>

        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#portfolio">
              <span>#4</span>Portfolio
            </a>
            <h2>
              Portfolio -
              <br />
              Beats Maker.
            </h2>
            <p class="lead">A simple beats maker app.</p>
            {/* <Button style={{ alignSelf: "end" }}>GO DEMO</Button> */}
          </div>
        </div>
      </section>

      <section class="section section--portfolio" id="portfolio2">
        <div class="section__inner">
          <div class="block">
            <h2>
              Portfolio -
              <br />
              Recipe Search Engine.
            </h2>
            <p></p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 102"
          preserveAspectRatio="none"
          class="bottom"
        >
          <path d="M0 0 L50 100 L100 0 Z"></path>
        </svg>
      </section>

      <section class="section section--contact" id="contact">
        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#contact">
              <span>#5</span>GETINTOUCH
            </a>
            <h2>Contact me.</h2>
            <p class="lead">
              More links: <a href="https://dribbble.com/hellovolker">GitHub</a>,
              <a href="https://www.linkedin.com/in/ottovolker"> LinkedIn</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
