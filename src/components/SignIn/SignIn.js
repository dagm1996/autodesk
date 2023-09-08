import React, { useState } from "react";
import { Auth } from "aws-amplify";

const SignIn = () => {
  const [signInCred, setSignInCred] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const signInFun = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await Auth.signIn(signInCred.email, signInCred.password);
      console.log(user);
      setIsLoading(false);
    } catch (error) {
      console.log("error signing in", error);
      setIsLoading(false);
    }
  };

  const onChange = (e) => {
    setSignInCred((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div>SignIn</div>
      <div>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name={"email"}
              value={signInCred.email}
              onChange={onChange}
              type="text"
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={signInCred.password}
              onChange={onChange}
              type="text"
              placeholder="password"
            />
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
