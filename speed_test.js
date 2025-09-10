// Define a function to calculate demerit points based on vehicle speed
function calculate_demerit_points(speed) {
    // Define constants for speed limit, km per demerit point, and suspension threshold
    const speed_limit = 70; // Speed limit in km/h
    const km_per_demerit_point = 5; // Kilometers over the limit per demerit point
    const demerit_points_threshold = 12; // Points at which license is suspended

    // Check if speed is invalid (not a number or negative)
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input"); // Output error for invalid or negative speed
        return; 
    }

    // Check if speed is below or equal to the speed limit
    if (speed <= speed_limit) {
        console.log("Ok"); // Output "Ok" if speed is within the limit
    } else {
        // Calculate demerit points by subtracting speed limit from speed and dividing by km per point
        // Use Math.floor to round down to the nearest whole number, as points are integers
        const demerit_points = Math.floor((speed - speed_limit) / km_per_demerit_point);

        // Check if demerit points exceed the threshold for license suspension
        if (demerit_points > demerit_points_threshold) {
            console.log("License suspended"); // Output suspension message if points exceed 12
        } else {
            // Output the number of demerit points (e.g., "Points: 3" for clarity)
            console.log(`Points: ${demerit_points}`);
        }
    }
}

// Test cases
calculate_demerit_points(60); // Should output: Ok
calculate_demerit_points(80); // Should output: Points: 2
calculate_demerit_points(100); // Should output: Points: 6
calculate_demerit_points(135); // Should output: License suspended
calculate_demerit_points(-10); // Should output: Invalid input
calculate_demerit_points("abc"); // Should output: Invalid input