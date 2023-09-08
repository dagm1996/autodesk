import React, { useState, useEffect } from "react";
import App from "../App";
import Loading from "../components/Loading";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Navigate, useNavigate, redirect } from "react-router-dom";
import Cookie from "universal-cookie";

const cookie = new Cookie();

function SSO() {
  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    // const grantCode = "2702cdc8-4881-427f-955a-da1bc00d6e6d";
    const grantCode = new URL(window.location.href).searchParams.get("code");
    // const storedAccessToken = localStorage.getItem("storedAccessToken");
    const storedAccessToken = cookie.get("storedAccessToken");

    if (storedAccessToken) {
      if (storedAccessToken == "undefined") {
        // localStorage.clear();
        cookie.remove("storedAccessToken");
      } else {
        setAccessToken(storedAccessToken);
      }
    } else {
      //console.log('no stored access token')
    }
    if (!grantCode && !storedAccessToken) {
      redirectToPage();
    }
    setCode(grantCode);
  }, []);

  // 2702cdc8-4881-427f-955a-da1bc00d6e6d
  useEffect(() => {
    async function handleTokenVaidation() {
      try {
        if (code) {
          await getUserInfo("authCode", code);
        } else {
          // console.log('dont got code')
        }
      } catch (error) {
        console.log(error);
      }
    }
    handleTokenVaidation();
  }, [code]);

  const redirectToPage = () => {
    try {
      // window.location.href =
      // "https://people-insights.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=486jdp55loudfoo165o9ple2ir&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd1ovk7y7rzi297.cloudfront.net";
      // "https://people-insights.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=486jdp55loudfoo165o9ple2ir&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getUserInfo("accessToken", accessToken);
    } else {
      // console.log('dont got access token')
      // console.log('no stored token')
    }
  }, [accessToken]);

  const getUserInfo = (type, code) => {
    try {
      const STG = "stage";
      let url = `https://76clz1n9xk.execute-api.us-east-2.amazonaws.com/stage_20230629_v2?stage=${STG}&type=${type}&code=`;

      url = url + code;

      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "result from the API"); //
          setAccessToken(data.access_token);
          setUser(data.email);
          // localStorage.setItem("storedAccessToken", data.access_token);
          cookie.set("storedAccessToken", data.access_token);
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error(error);
        });
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  return (
    <div className="App">
      {true ? (
        <>
          <App />
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
}

export default SSO;
