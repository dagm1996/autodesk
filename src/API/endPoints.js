import Cookie from "universal-cookie";
let baseURL =
  "https://76clz1n9xk.execute-api.us-east-2.amazonaws.com/stage_20230629_v2";

const cookie = new Cookie();

let token = cookie.get("storedAccessToken");

export const endPoint = {
  BASE_URL: baseURL,

  RESEARCH: `/ResearchTiles?token='${token}'`,

  BLOG: `/blogTiles?token='${token}'`,

  DASHBOARD: `https://mytestauth.auth.us-west-2.amazoncognito.com/`,
};
