const config = {
    authority: 'https://people-insights.auth.us-east-2.amazoncognito.com',
    client_id: '486jdp55loudfoo165o9ple2ir',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'code',
    scope: 'openid email',
    post_logout_redirect_uri: 'http://localhost:3000',
};

export default config;