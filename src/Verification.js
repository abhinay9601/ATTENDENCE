// import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import styles from "./Verification.module.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link } from "react-router-dom";
const Verification = () => {
  const [OTP, setOTP] = useState("");
  return (
    <div className={styles.main}>
      <h4>Verification code</h4>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit,lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>
      <div className={styles.otptext}>
        Code Sent to 7945678923 <span>Change number</span>
      </div>
      <div className={styles.input}>
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          inputClassName={styles.border}
          className={styles.otp}
        />
        <ResendOTP
          className={styles.resend}
          onResendClick={() => console.log("Resend clicked")}
        />
        {/* <FiPhone /> */}
      </div>
      <div className={styles.arrow}>
      <Link to="/profile" onClick={()=>{window.location.href="/profile"}}>
          <span>➡</span>
        </Link>
      </div>
    </div>
  );
};
export default Verification;
