# Investment Calculator 📈

## Overview
The **Investment Calculator** is a simple JavaScript tool that calculates the growth of an investment over time. It factors in the initial investment, monthly contributions, interest rate, and duration to estimate the total value.

---

## Features
- Calculates yearly investment value.
- Supports compound interest.
- Simple console-based output.
- Easy to customize parameters.

---

## Usage
Create an instance of the `InvestmentCalculator` class and run it:
```javascript
const calculator = new InvestmentCalculator(
    1000,  // Initial investment
    50,    // Monthly contribution
    5,     // Years
    5      // Interest rate (%)
);
calculator.displayResults();
```

### Parameters
| Parameter | Description |
|-----------|------------|
| `initialInvestment` | Starting investment amount |
| `monthlyContribution` | Amount added each month |
| `years` | Investment duration in years |
| `interestRate` | Annual interest rate |

---

## Sample Output
```
Year | Investment Value | Total Contributions
Year 0: 1000.00 | 1000.00
Year 1: 1815.00 | 1600.00
Year 2: 2695.75 | 2200.00
Year 3: 3646.54 | 2800.00
Year 4: 4671.87 | 3400.00
Year 5: 5776.46 | 4000.00
```

---

## Future Improvements
- Add a web-based interface.
- Implement charts for better visualization.
- Allow users to customize compounding frequency.

---

## Contribution
To contribute:
1. Fork the repository.
2. Create a new branch.
3. Commit and push your changes.
4. Submit a pull request.

---

## Contact
For any questions or suggestions:
📧 Email: rasanjula89.com  
🔗 GitHub: [GitHub Profile](https://github.com/rasanjula)   

