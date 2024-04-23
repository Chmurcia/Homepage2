import { expect, test } from "vitest";

function sum(x: number, y:number): number {
    return x + y;
}

test('1 + 2 is equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
})