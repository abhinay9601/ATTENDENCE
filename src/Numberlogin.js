// import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./Number.module.css";
const Numberlogin = () => {
  return (
    <div className={styles.main}>
      <h4>What's Your number</h4>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit,lorem ipsum
        dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur
        adipisicing elit. dolor sit amet consectetur adipisicing elit.
      </p>
      <div className={styles.input}>
        <label>Enter Number</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Ex: 9567879045"
        ></input>
        {/* <BiPhone /> */}
      </div>
      <div className={styles.arrow}>
        <Link to="/verification" onClick={()=>{window.location.href="/verification"}}>
          <span>➡</span>
        </Link>
      </div>
    </div>
  );
};
export default Numberlogin;
