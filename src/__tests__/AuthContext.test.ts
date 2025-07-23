import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from "@/lib/auth/AuthContext";

const TestComponent = () => {
    const { user, isLoading, isAuthenticated } = useAuth();
    
    if(isLoading) return <div>loadConfig...</div>;

    return (
        <div>
            <div data-testid="authenticated">{isAuthenticated ? 'true' : 'false'}</div>
            <div data-testid="user">{user?.email || 'No user'}</div>
        </div>
    );
};
