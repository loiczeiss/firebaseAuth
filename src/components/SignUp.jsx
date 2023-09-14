import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const auth = getAuth()
const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
        


}
    

  return (
<>
<div className="signUpCadre">
    <div className="Title">
      <h2>Signing Up</h2>
    </div>
    <form className="Info" 
    // onSubmit={handleSubmit}
    >
      {" "}
      {/* Wrap the inputs and button with a <form> */}
      <div className="Inputs">
        {/* <input
          type="text"
          style={{ opacity: "100%" }}
          className="inpuT"
          placeholder={"UserName"}
          name="userName"
          value={data.userName}
          required
          onChange={handleChange}
        /> */}
        <input
          type="email"
          style={{ opacity: "100%" }}
          className="inpuT"
          placeholder={"Email"}
          name="email"
          required
          onChange={(e)=>setEmail(e.target.value)}
        />
        {/* <input
          type="text"
          style={{ opacity: "100%" }}
          className="inpuT"
          placeholder={"Confirm Email"}
          
        /> */}
        <input
          type="password"
          style={{ opacity: "100%" }}
          className="inpuT"
          placeholder={"Password"}
          name="password"
      
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
        {/* <input
          type="text"
          style={{ opacity: "100%" }}
          className="inpuT"
          placeholder={"Confirm Password"}
        /> */}
      </div>
      <div className="Checkboxes">
        <div id="f">
          <input type="checkbox" />
          <p>Stay connected?</p>
        </div>
        <div>
          <p id={"end"}>Forgot password?</p>
        </div>
      </div>

      <div className="Bouton">
        <button type="submit"
        onClick={onSubmit}
        >Sign up</button>

      </div>
    </form>
  </div></>
  )
}

export default SignUp