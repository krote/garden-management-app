import { User, AuthUser, SignUpForm } from '@/types';
import { describe } from 'node:test';

describe('Types Definitions', () => {
    test('User type has required fields', () => {
        const user: User = {
            userId: 'test-id',
            email: 'test@example.com',
            nickname: 'テストユーザ',
            experienceLevel: 'beginner',
            privacySettings: {
                shareGrowthData: true,
                shareRegion: true,
                shareNickname: true,
            },
            preferences: {
                reminderTime: '08:00',
                weatherNotification: true,
            },
            createdAt: '2025-07-05T00:00:00Z',
            updatedAt: '2025-07-05T00:00:00Z',
        };

        expect(user.userId).toBe('test-id');
        expect(user.email).toBe('test@example.com');
    });
});
