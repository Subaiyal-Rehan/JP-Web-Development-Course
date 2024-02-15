function calculateAverage(numbers) {
    // Checks if the array is empty
    if (numbers.length === 0) {
        return 0; // Return 0 if the array is empty to avoid division by zero
    }

    // Calculate the sum of all numbers in the array
    var sum = numbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    // Calculate the average by dividing the sum by the number of elements in the array
    var average = sum / numbers.length;
    
    return average;
}

// Example usage
var numbers = [10, 20, 30, 40, 50];
var average = calculateAverage(numbers);
console.log("Average:", average); // Output: Average: 30