'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService, AuthUser } from './cognito';

interface AuthContextType {
    user: AuthUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, nickname: string) => Promise<void>;
    confirmSignUp: (email: string, code: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context == undefined){
        throw new Error('useAuth must be used wihtin an AuthProvider');
    }
    return context;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        initializeAuth();
    }, []);

    const initializeAuth = async () => {
        try{
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
        }catch(error){
            console.error('Initialize auth error', error);
        }finally{
            setIsLoading(false);
        }
    };

    const signin = async (email: string, password: string) => {
        const result = await authService.signIn(email, password);
        if(result.success){
            const user = await authService.getCurrentUser();
            setUser(user);
        }
    };

    const signUp = async (email:string, password: string, nickname: string) => {
        await authService.signUp(email, password, nickname);
    };

    const confirmSignUp = async (email: string, code: string) => {
        await authService.confirmSignUp(email, code);
    };

    const signOut = async () => {
        await authService.signOut();
        setUser(null);
    };
    
    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        signIn,
        signUp,
        confirmSignUp,
        signOut,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};