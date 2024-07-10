
import { describe, it, expect } from 'vitest';
import { arrSum } from '../Array Plus Array/app';

describe('arrSum', () => {
    it('sums all elements in two arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = arrSum(arr1, arr2);
        expect(result).toBe(21);
    });

    it('sums elements correctly when one array is empty', () => {
        const arr1 = [-1, -2, -3];
        const arr2 = [-4, -5, -6];
        const result = arrSum(arr1, arr2);
        expect(result).toBe(-21);
    });
    it('sums elements correctly when both arrays are empty', () => {
        const arr1 = [0, 0, 0];
        const arr2 = [4, 5, 6];
        const result = arrSum(arr1, arr2);
        expect(result).toBe(15);
    });

    it('sums elements correctly with negative numbers', () => {
        const arr1 = [100, 200, 300];
        const arr2 = [400, 500, 600];
        const result = arrSum(arr1, arr2);
        expect(result).toBe(2100);
    });
});