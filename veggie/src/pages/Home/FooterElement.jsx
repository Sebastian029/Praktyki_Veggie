import styles from "./index.module.css";

import turnipIcon from "./../../assets/turnipIcon.png";
import beetrootIcon from "./../../assets/beetrootIcon.png";
import socialIcon from "./../../assets/socialIcon.png";

function FooterElement(props) {
  return (
    <section>
      {props.image == "turnipIcon" ? <img src={turnipIcon} /> : ""}
      {props.image == "beetrootIcon" ? <img src={beetrootIcon} /> : ""}
      {props.image == "socialIcon" ? <img src={socialIcon} /> : ""}
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </section>
  );
}

export default FooterElement;
