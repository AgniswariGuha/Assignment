
function calculateChanges(A, B) {
    const changes = [[], []]; // Array to hold elements to add and delete

    // Count occurrences of elements in A and B
    const countA = {};
    const countB = {};
    A.forEach(num => countA[num] = (countA[num] || 0) + 1);
    B.forEach(num => countB[num] = (countB[num] || 0) + 1);

    // Check elements in B not present in A
    for (let num in countB) {
        if (!countA[num]) {
            changes[1].push(+num); // Add element to delete list
        } else if (countB[num] > countA[num]) {
            const diff = countB[num] - countA[num];
            for (let i = 0; i < diff; i++) {
                changes[1].push(+num); // Add extra occurrences to delete list
            }
        }
    }

    // Check elements in A not present in B
    for (let num in countA) {
        if (!countB[num]) {
            changes[0].push(+num); // Add element to add list
        } else if (countA[num] > countB[num]) {
            const diff = countA[num] - countB[num];
            for (let i = 0; i < diff; i++) {
                changes[0].push(+num); // Add extra occurrences to add list
            }
        }
    }

    return changes;
}

// Example usage:
const A = [2, 5, 7];
const B = [1, 2, 3, 4, 5];
const result = calculateChanges(A, B);
console.log(result); // Output: [[7], [1, 3, 4]]
