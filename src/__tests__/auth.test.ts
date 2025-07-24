import { authService } from "@/lib/auth/cognito";
import { describe } from "node:test";

jest.mock('aws-amplify', () => ({
    Amplify: {
        configure: jest.fn(),
    },
    Auth: {
        signUp: jest.fn(),
        signIn: jest.fn(),
        signOut: jest.fn(),
        confirmSignUp: jest.fn(),
        currentAuthenticatedUser: jest.fn(),
        currentSession: jest.fn(),
    },
}));

describe('Auth Service', () => {
    test('signUp calls Auth.signUp with correct paramters', async() => {
        const { Auth } = require('aws-amplify');
        Auth.signUp.mockResolvedValue({
            user: { username: 'test@exampl.com'}
        });

        const result = await authService.signUp(
            'test@example.com',
            'TestPassword123',
            'テストユーザー'
        );

        expect(Auth.signUp).toHaveBeenCalledWith({
            username: 'test@example.com',
            password: 'TestPassword123',
            attributes: {
                email: 'test@example.com',
                nickname: 'テストユーザー',
            },
        });
        expect(result.success).toBe(true);
    });

    test('getCurrentuser returns null when not authenticated', async() => {
        const { Auth } = require('aws-amplify');
        Auth.currentAuthenticatedUser.mockResolvedValue(new Error('Not authenticated'));

        const user = await authService.getCurrentUser();
        expect(user).toBeNull();
    });
});