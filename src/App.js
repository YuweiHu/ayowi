import "./App.scss";
import $ from "jquery";

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
              <li
                onClick={() => {
                  $("html, body").animate(
                    {
                      scrollTop: $("#intro").offset().top,
                    },
                    1000
                  );
                }}
              >
                <a href="#intro">Intro</a>
              </li>
              <li
                onClick={() => {
                  $("html, body").animate(
                    {
                      scrollTop: $("#about").offset().top,
                    },
                    1200
                  );
                }}
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={() => {
                  $("html, body").animate(
                    {
                      scrollTop: $("#blog").offset().top,
                    },
                    1400
                  );
                }}
              >
                <a href="#blog">Blog</a>
              </li>
              <li
                onClick={() => {
                  $("html, body").animate(
                    {
                      scrollTop: $("#portfolio").offset().top,
                    },
                    1600
                  );
                }}
              >
                <a href="#portfolio">Portfolio & Work</a>
              </li>
              <li
                onClick={() => {
                  $("html, body").animate(
                    {
                      scrollTop: $("#contact").offset().top,
                    },
                    1800
                  );
                }}
              >
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
            <h1>
              Full-Stack Engineer <span>based in</span> Taiwan
            </h1>
            <p class="lead">
              <span>See my full resume on </span>
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
        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#about">
              <span>#2</span>About
            </a>
            <h2>
              <span>familiar with</span> ReactJS <span>ecosystem</span>
            </h2>
            <h2>
              <span> includes </span> React <span> / </span>Redux
              <span> / </span>
              React Router<span> ...etc </span>
            </h2>
            <h2>
              <span>also have experience with... </span> TypeScript{" "}
              <span> / </span> Nuxt
              <span> / </span>
              TailwindCSS
            </h2>
            <h2>
              <span> about back-end... </span> NodeJS <span> with </span>{" "}
              Express
            </h2>
            <h2>
              <span> about database... </span> MongoDB
            </h2>
          </div>
        </div>
      </section>

      <section class="section section--clients" id="blog">
        <div class="section__inner">
          <a class="pre" href="#clients">
            <span>#3</span>Blog
          </a>
          <h2>
            <span>I wrote my</span> study notes <span>and some</span> technology
            articles
            <span> in my blog.</span>
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
        </div>
      </section>

      <section class="section section--portfolio1" id="portfolio">
        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#portfolio">
              <span>#4</span>Portfolio & Work
            </a>
            <h2>Portfolio</h2>
            <h2>
              <a
                href="https://ayowi.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Personal Homepage
              </a>
              <span> / </span>
              <a
                href="https://ayowi-blog.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Personal Blog
              </a>
              <span> / </span>
              <a
                href="https://github.com/YuweiHu/beats-maker"
                target="_blank"
                rel="noreferrer"
              >
                Beats Maker
              </a>
              <span> / </span>
              <a
                href="https://github.com/YuweiHu/recipe-app"
                target="_blank"
                rel="noreferrer"
              >
                Recipe Search Engine
              </a>
            </h2>
          </div>
        </div>
      </section>

      <section class="section section--portfolio" id="portfolio2">
        <div class="section__inner">
          <div class="block">
            <h2>Work</h2>
            <h2>
              <a
                href="https://www.decopapa.com/"
                target="_blank"
                rel="noreferrer"
              >
                Decopapa Offical Website
              </a>
            </h2>
          </div>
        </div>
      </section>

      <section class="section section--contact" id="contact">
        <div class="section__inner">
          <div class="block">
            <a class="pre" href="#contact">
              <span>#5</span>GETINTOUCH
            </a>
            <h2>Contact me.</h2>
            <p class="lead">
              <span>More links:</span>{" "}
              <a
                href="mailto:j821220j821220@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
              ,
              <a
                href="https://github.com/YuweiHu"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                GitHub
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/ottovolker"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
