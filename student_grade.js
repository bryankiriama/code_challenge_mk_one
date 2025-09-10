// Define a function to calculate a student's grade based on their marks
function studentGrade() {
    // Prompt the user to enter the student's marks and convert the input to an integer
    let marks = parseInt(prompt("Enter Student's Marks (0-100)"));

    // Check if the input is not a number (e.g., user enters letters or cancels prompt)
    if (isNaN(marks)) {
        return "Invalid input"; // Return error message for non-numeric input
    }
    // Check if the marks are outside the valid range (less than 0 or greater than 100)
    else if (marks < 0 || marks > 100) {
        return "Invalid input"; // Return error message for out-of-range input
    }

    else if (marks >= 79) {
        return "Grade: A"; // Return grade A for marks 79-100
    }

    else if (marks > 60 && marks < 79) {
        return "Grade: B"; // Return grade B for marks 61-78
    }

    else if (marks > 49 && marks <= 59) {
        return "Grade: C"; // Return grade C for marks 50-59
    }

    else if (marks > 40 && marks <= 49) {
        return "Grade: D"; // Return grade D for marks 41-49
    }

    else if (marks < 40) {
        return "Grade: E"; // Return grade E for marks 0-39
    }
    
    else {
        return "Invalid input"; // Return error message for any other case
    }
}

// Call the function and log the result to the console
console.log(studentGrade());