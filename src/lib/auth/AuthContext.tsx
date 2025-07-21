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
}