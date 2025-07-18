import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: process.env.NEXT_PUBLIC_AWS_REGION,
        userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
        userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
    },
});