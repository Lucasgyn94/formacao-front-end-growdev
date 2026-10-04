export function sortAscending(numbers: number[]): number[] {
    return [...numbers].sort((a,b) => a - b);
}

export function sortDescending(numbers: number[]): number[] {
    return [...numbers].sort((a, b) => b - a);
}

