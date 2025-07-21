import { Amplify, Auth } from 'aws-amplify';
import { AuthUser } from '@/types';

if( typeof window != 'undefined'){
    Amplify.configure({
        Auth: {
            region: process.env.NEXT_PUBLIC_AWS_REGION,
            userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
            userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
        },
    });
}

export interface AuthUser {
    username: string;
    email: string;
    nickname?: string;
}

export const authService = {
    async singUp(email: string, password: string, nickname: string){
        try{
            const result = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,
                    nickname,
                },
            });
            return { success: true, user: result.user };
        }catch(error){
            console.error('SignUp error:', error);
            throw error;
        }
    },

    // 確認コード送信
    async confirmSignUp(email: string, code: string){
        try{
            await Auth.confirmSignUp(email, code);
            return { success: true };
        }catch(error){
            console.error('ConfirmSignUp error', error);
            throw error;
        }
    },

    // sign in
    async signIn(email: string, password: string){
        try{
            const user = await Auth.signIn(email, password);
            return { success: true, user };
        }catch(error){
            console.error('SignIn error:', error);
            throw error;
        }
    },

    // SignOut
    async signOut() {
        try{
            await Auth.signOut();
            return { success: true };
        }catch(error){
            console.error('SignOut error:', error);
            throw error;
        }
    },

    // get user
    async getCurrentUser(): Promise<AuthUser | null> {
        try{
            const user = await Auth.currentAuthenticatedUser();
            return {
                username: user.username,
                email: user.attributes.email,
                nickname: user.attributes.nickname,
            };
        }catch(error){
            return null;
        }
    },

    //jwt
    async getAccessToken(): Promise<string | null> {
        try{
            const session = await Auth.currentSession();
            return session.getAccessToken().getJwtToken();
        }catch(error){
            return null;
        }
    },
};
