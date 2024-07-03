import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./index.module.css";
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
    window.href = path;
  };
  const items = [
    {
      label: <div onClick={() => handleNav("#home")}>Home</div>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={() => handleNav("#specials")}>Specials</div>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={() => handleNav("#about")}>About</div>,
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={() => handleNav("#menu")}>Menu</div>,
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={() => handleNav("#contact")}>Contact</div>,
      key: "4",
    },
  ];
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${HomeBackground})` }}
    >
      <nav>
        <ul className={styles.navigationBar}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#specials">Specials</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          className={styles.dropdownMenu}
        >
          <span onClick={(e) => e.preventDefault()}>
            <Space>
              Menu
              <MenuOutlined />
            </Space>
          </span>
        </Dropdown>
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
