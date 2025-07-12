import { describe, expect, test } from '@jest/globals';
import { formatDate, calculateDaysFromPlanting } from '@/lib/utils';

describe('Utils', () => {
    test('fromDate formats date correctly', () =>{
        const date = new Date('2025-07-05');
        expect(formatDate(date)).toBe('2025/07/05');
    });

    test('calculateDaysFromPlanting calculates correct days', () => {
        const plantedDate = '2025-06-01';
        const currentDate = '2025-07-05';
        expect(calculateDaysFromPlanting(plantedDate, currentDate)).toBe(34);
    });
});