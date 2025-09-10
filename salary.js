function calculate_net_salary(basic_salary, benefits) {
    // Define tax rates for PAYE
    const paye_rates = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 25 },
        { min: 32334, max: 500000, rate: 30 },
        { min: 500001, max: 800000, rate: 32.5 },
        { min: 800001, max: Infinity, rate: 35 }
    ];

    // Define NHIF deduction rates
    const nhif_rates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    // Define NSSF contribution rate
    const nssf_rate = 0.06;

    // Calculate PAYE based on gross salary
    let paye = 0;
    for (const rate of paye_rates) {
        if (basic_salary + benefits >= rate.min && basic_salary + benefits <= rate.max) {
            paye = (basic_salary + benefits) * (rate.rate / 100);
            break;
        }
    }

    // Calculate NHIF deduction based on basic salary
    let nhif_deduction = 0;
    for (const rate of nhif_rates) {
        if (basic_salary >= rate.min && basic_salary <= rate.max) {
            nhif_deduction = rate.deduction;
            break;
        }
    }

    // Calculate NSSF deduction
    const nssf_deduction = basic_salary * nssf_rate;

    // Calculate gross salary
    const gross_salary = basic_salary + benefits;

    // Calculate net salary after deductions
    const net_salary = gross_salary - paye - nhif_deduction - nssf_deduction;

    // Return object with all calculated values
    return {
        paye,
        nhif_deduction,
        nssf_deduction,
        gross_salary,
        net_salary
    };
}

// Test the function with example values
const basic_salary = 150000;
const benefits = 10000;
const result = calculate_net_salary(basic_salary, benefits);
console.log("Net Salary:", result.net_salary);