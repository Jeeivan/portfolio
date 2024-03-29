import "../../css/Projects.css";
import Physio from "../../images/physio.png";
import Fitness from "../../images/fitness.png";
import Anime from "../../images/anime.png";
import Space from "../../images/space.png";
import Festive from "../../images/festive.png";
import Event from "../../images/event-organiser.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="Projects__item">
        <h1>Event Organiser App - 2 weeks - Solo Project</h1>
        <img src={Event} alt="Event app" />
        <p>
          <strong>Tech Stack: </strong>React, Express, Mongoose, Vanilla
          JavaScript ES6, MongoDB, Tailwind CSS, Node.js
        </p>
        <p>
        Developed a full-stack application to allow users to
create event plans and track them along with which members of
their group are going/not going, including a group chat per event to keep up to date with the latest information on the event.
        </p>
        <a
          href="https://events-organiser-frontend-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a>
        <a
          href="https://github.com/Jeeivan/events-organiser-frontend"
          target="_blank"
          rel="noreferrer"
        >
          <button>ReadMe</button>
        </a>
      </div>

      <div className="Projects__item">
        <h1>WaitLessWellness - 1 week - Solo Project</h1>
        <img src={Physio} alt="Physio" />
        <p>
          <strong>Tech Stack: </strong>Vanilla JavaScript ES6, Django, Django
          Rest Framework, PostgreSQL, React, Python, CSS, HTML
        </p>
        <p>
          Successfully built a user-friendly website that combines health
          information and interactive features, allowing users to access
          tailored physiotherapy guidance while awaiting in-person appointments
          to reduce stress on NHS waiting lists and for better patient outcome.
        </p>
        <a
          href="https://physio-frontend-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a>
        <a
          href="https://github.com/Jeeivan/Physio-frontend"
          target="_blank"
          rel="noreferrer"
        >
          <button>ReadMe</button>
        </a>
      </div>

      <div className="Projects__item">
        <h1>EverythingAnime - 1 week - Solo Project</h1>
        <img src={Anime} alt="Anime" />
        <p>
          <strong>Tech Stack: </strong>Vanilla JavaScript ES6, MongoDB,
          Mongoose, Node.js, Vue.js, Express, CSS, HTML
        </p>
        <p>
          Established a user-friendly website showcasing anime content and
          fostering community engagement with a timeframe of one week.
        </p>
        <a
          href="https://everythinganime.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a>
        <a
          href="https://github.com/Jeeivan/SEI-75-U2-frontend"
          target="_blank"
          rel="noreferrer"
        >
          <button>ReadMe</button>
        </a>
      </div>

      <div className="Projects__item">
        <h1>Space Invaders - 1 week - Solo Project</h1>
        <img src={Space} alt="Space Invader" />
        <p>
          <strong>Tech Stack: </strong>Vanilla JavaScript ES6, HTML, CSS
        </p>
        <p>
          My take on the classic arcade game of Space Invaders. My first unit
          project of the General Assembly bootcamp. A stressful yet extremely
          rewarding and enjoyable experience where I got to put my foundation
          learning to the test in a personal project.
        </p>
        <a
          href="https://jeeivan.github.io/Space-Invaders-Project/"
          target="_blank"
          rel="noreferrer"
        >
          <button>Play Game</button>
        </a>
        <a
          href="https://github.com/Jeeivan/Space-Invaders-Project"
          target="_blank"
          rel="noreferrer"
        >
          <button>ReadMe</button>
        </a>
      </div>

      <div className="Projects__item">
        <h1>London Festive Finds - 2 days - Solo Project</h1>
        <img src={Festive} alt="Christmas" />
        <p>
          <strong>Tech Stack: </strong>TypeScript, React, HTML, CSS
        </p>
        <p>
          A React-based web app, enriches the holiday experience in London.
          Discover curated lists of festive foods, activities, and sightseeing
          places during the Christmas season. Explore detailed info,
          descriptions, locations, dates, and captivating images. A go-to guide
          for immersing yourself in the joy and magic of London's festive
          season.
        </p>
        <a
          href="https://jeeivan.github.io/festive-finds/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a>
        <a
          href="https://github.com/Jeeivan/festive-finds"
          target="_blank"
          rel="noreferrer"
        >
          <button>ReadMe</button>
        </a>
      </div>
      <div className="Projects__item">
        <h1>TrackTive - 1 week - Group Project (3 people)</h1>
        <img src={Fitness} alt="Fitness" />
        <p>
          <strong>Tech Stack: </strong>Vanilla JavaScript ES6, MongoDB,
          Mongoose, Node.js, Vue.js, Express, React, Next.js, CSS, HTML
        </p>
        <p>
          Successfully delivered a comprehensive platform tailored for gym-goers
          and health-conscious individuals. I led the development of the home
          page, user profiles, and goal-setting functionalities.
        </p>
        {/* <a
          href="https://physio-frontend-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project</button>
        </a> */}
        <a
          href="https://github.com/Jeeivan/tractive-frontend"
          target="_blank"
          rel="noreferrer"
        >
          <button>ReadMe</button>
        </a>
      </div>
    </div>
  );
}
