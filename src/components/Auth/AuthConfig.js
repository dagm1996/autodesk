// const awsConfig = {
//   Auth: {
//     identityPoolId: process.env.REACT_APP_SSO_COGNITO_IDENTITY_POOL_ID,
//     region: process.env.REACT_APP_SSO_AWS_PROJECT_REGION,
//     userPoolId: process.env.REACT_APP_SSO_USER_POOLS_ID,
//     userPoolWebClientId: process.env.REACT_APP_SSO_USER_POOLS_WEB_CLIENT_ID,
//   },
//   oauth: {
//     domain: 'ascending-demo-azure.auth.us-east-1.amazoncognito.com',
//     scope: ['email', 'openid'],
//     redirectSignIn: 'http://localhost:3000/',
//     redirectSignOut: 'http://localhost:3000/',
//     responseType: 'token',
//   },
// };

const config = {
  Auth: {
    region: 'us-east-2', // e.g. 'us-east-1'
    userPoolId: 'us-east-2_8i7Pe1Ejn', // The User Pool ID you created in AWS Cognito
    userPoolWebClientId: '486jdp55loudfoo165o9ple2ir', // The App client ID you created for your User Pool
  },
  oauth: {
    domain: "people-insights.auth.us-east-2.amazoncognito.com",
    scope: ["email", "openid"],
    redirectSignIn: "http://localhost:3000", // https://d1ovk7y7rzi297.cloudfront.net
    redirectSignOut: "https://people-insights.autodesk.com/logout",
    responseType: "code",
  },
};

export default config;
// export default awsConfig;
