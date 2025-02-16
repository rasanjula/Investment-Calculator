/**
 * InvestmentCalculator Class
 * Calculates investment growth over time with compound interest.
 */
class InvestmentCalculator {
    /**
     * Constructor initializes the investment parameters.
     * @param {number} initialInvestment - The starting investment amount.
     * @param {number} monthlyContribution - The monthly deposit.
     * @param {number} years - The total number of years.
     * @param {number} interestRate - The annual interest rate in percentage.
     */
    constructor(initialInvestment, monthlyContribution, years, interestRate) {
        this.initialInvestment = initialInvestment;
        this.monthlyContribution = monthlyContribution;
        this.years = years;
        this.interestRate = interestRate / 100; // Convert to decimal
    }

    /**
     * Calculates the investment growth over time.
     * @returns {Array} An array containing yearly investment values.
     */
    calculateGrowth() {
        let results = [];
        let investmentValue = this.initialInvestment;
        let totalContributions = this.initialInvestment;

        for (let year = 0; year <= this.years; year++) {
            results.push({
                year: year,
                investmentValue: investmentValue.toFixed(2),
                totalContributions: totalContributions.toFixed(2)
            });

            // Add yearly contributions and apply interest (only if not the final year)
            if (year < this.years) {
                totalContributions += this.monthlyContribution * 12;
                investmentValue = (investmentValue + this.monthlyContribution * 12) * (1 + this.interestRate);
            }
        }
        return results;
    }

    /**
     * Displays the calculated investment growth in the console.
     */
    displayResults() {
        let results = this.calculateGrowth();
        console.log("Year | Investment Value | Total Contributions");
        results.forEach(entry => {
            console.log(
                `Year ${entry.year}: ${entry.investmentValue} | ${entry.totalContributions}`
            );
        });
    }
}

// Example usage
const calculator = new InvestmentCalculator(1000, 50, 5, 5);
calculator.displayResults();
