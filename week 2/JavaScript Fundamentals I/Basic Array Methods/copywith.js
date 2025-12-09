const arr = ["A", "B", "C", "D", "E"];

// Copy elements starting at index 0 to index 2
arr.copyWithin(2, 0);
// ["A", "B", "A", "B", "C"]
// Index 2,3 get values from index 0,1

// Visual explanation:
// Start:  [A, B, C, D, E]
// Copy index 0-1 to index 2-3
// Result: [A, B, A, B, C]

array.copyWithin(target, start, end)