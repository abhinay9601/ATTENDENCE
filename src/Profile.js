import { Link } from "react-router-dom";
import pic from "./abhinay.jpg";
import styles from "./Profile.module.css";
// import { AiFillBug } from "react-icons/ai"
const Profile = () => {
  return (
    <div className={styles.all}>
      <div className={styles.top}>
<Link>        <span >⬅</span></Link>
        <span>Profile</span>
      </div>
      <div className={styles.card}>
        <img src={pic} alt="user" width="70px"></img>
        <p className={styles.bold}>Sandeep dass</p>
        <div>
          <p>Somexone@gmail.com</p>
        </div>
        <div className={styles.details}>
          <div>
            <p>College ID</p>
            <p class={styles.bold}>8956749876</p>
          </div>
          <div>
            <p>Course</p>
            <p class={styles.bold}>B.tech</p>
          </div>
        </div>
        <div className={styles.details2}>
          <div>
            <p>Total Attendence</p>
            <p className={styles.per}>50%</p>
          </div>
          <div>
            <p>Monthly Attendence</p>
            <p className={styles.per}>50%</p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.bottom}>
        <span><i className={styles.icon} class="fa-solid fa-gear"></i>
          <span className={styles.setting}>Settings</span></span> <span className={styles.last}>➡</span>
        </div>
        <div className={styles.bottom}>
        <span>  <i className={styles.icon} class="fa-solid fa-lock"></i><span className={styles.setting}>Change
          Password</span></span><span className={styles.last}>➡</span>
        </div>
      </div>
      <div className={styles.button}>
      <Link to="/" onClick={()=>{window.location.href="/"}}>  <button>Logout</button></Link>
      </div>
    </div>
  );
};
export default Profile;
