import React, { useState } from "react";
import OTPInput from "react-otp-input";


function Ma_OPT() {
  const [otp, setOtp] = useState("");
  return (
    <>
      
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />

      
    </>
  );
}

export default Ma_OPT;
