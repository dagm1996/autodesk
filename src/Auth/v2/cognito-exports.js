const config = {
    Auth: {
        region: 'us-east-2', // e.g. 'us-east-1'
        userPoolId: 'us-east-2_8i7Pe1Ejn', // The User Pool ID you created in AWS Cognito
        userPoolWebClientId: '17bb6bfd-d60d-44d7-92d2-7302d594b4df', // The App client ID you created for your User Pool
        oauth: {
            domain: "people-insights.autodes",
            scope: ["email", "openid"],
            redirectSignIn: "https://people-insights.autodesk.com/login_callback",
            redirectSignOut: "https://people-insights.autodesk.com/logout",
            responseType: "code",
        },
    },
};

export default config;