import styles from "./index.module.css";
import { Link } from "react-router-dom";
import HomeBackground from "./../../assets/HomeBackground.jpg";
import yellowBackground from "./../../assets/yellowBackground.jpg";
import decoration from "./../../assets/decoration.png";

import FooterElement from "./FooterElement";
const data = [
  {
    id: 1,
    title: "Turnip greens",
    image: "turnipIcon",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia consectetur tempor.",
  },
  {
    id: 2,
    title: "Beetroot water",
    image: "beetrootIcon",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae enim ac massa pulvinar pulvinar. ",
  },
  {
    id: 3,
    title: "Get Social",
    image: "socialIcon",
    content:
      "Morbi lacinia consectetur tempor. Duis vitae enim ac massa pulvinar pulvinar. ",
  },
];

function index() {
  const handleNav = (path) => {
    window.location.href = path;
  };
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${HomeBackground})` }}
    >
      <nav>
        <ul className={styles.navigationBar}>
          <li onClick={() => handleNav("/home")}>Home</li>
          <li onClick={() => handleNav("/specials")}>Specials</li>
          <li onClick={() => handleNav("/about")}>About</li>
          <li onClick={() => handleNav("/menu")}>Menu</li>
          <li onClick={() => handleNav("/contact")}>Contact</li>
        </ul>
      </nav>

      <aside>
        <p>
          Veggies es bonus vobis,
          <br /> proinde vos postulo essum
        </p>
        <img src={decoration} />
      </aside>

      <footer
        className={styles.footer}
        style={{ backgroundImage: `url(${yellowBackground})` }}
      >
        {data.map((item) => {
          return (
            <FooterElement
              key={item.id}
              title={item.title}
              image={item.image}
              content={item.content}
            />
          );
        })}
      </footer>
    </div>
  );
}

export default index;
