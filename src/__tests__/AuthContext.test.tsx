import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from "@/lib/auth/AuthContext";
import { describe } from "node:test";

const TestComponent = () => {
    const { user, isLoading, isAuthenticated } = useAuth();
    
    if(isLoading) return <div>Loading...</div>;

    return (
        <div>
            <div data-testid="authenticated">{isAuthenticated ? 'true' : 'false'}</div>
            <div data-testid="user">{user?.email || 'No user'}</div>
        </div>
    );
};

describe('AuthContext', () => {
    test('provides authentication state', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        // ロード完了後
        await waitFor( () => {
            expect(screen.getByTestId('authenticated')).toHaveTextContent('false');
            expect(screen.getByTestId('user')).toHaveTextContent('No user');
        });
    });
});

