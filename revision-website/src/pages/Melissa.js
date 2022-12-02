/*
SAVINGS:
savings income - PSA  = "remaining taxable savings" or "remaining PSA"
*/

//SAVINGS CALCULATION
let savingsIncome = 1000;
const PSA = 5000;
function computeSavingsTax(savingsIncome, PSA) {
  const result = savingsIncome - PSA;
  if (result < 0) {
    const remainingPSA = Math.abs(result);
    console.log(`You have £${remainingPSA} remaining PSA.`);
  } else {
    console.log(
      `You have £${result} taxable savings income after PSA exhausted.`
    );
  }
}
computeSavingsTax(savingsIncome, PSA);
//SAVINGS CALCULATION

/*
DIVIDENDS:


*/

//DIVIDENDS CALCULATION
let dividendIncome = 160000;
const dividendAllowance = 2000;
function computeDividendTaxAllowance(dividendIncome, dividendAllowance) {
  let wasTaxedAdditionalRate = 0;
  let wasTaxedUpperRate = 0;
  let wasTaxedOrdinaryRate = 0;
  let remainingDividendAfterOrdinaryRate = 0;
  let remainingDividendAfterUpperRate = 0;
  let remainingDividendAfterAdditionalRate = 0;
  console.log(`You have £${dividendIncome}, get ready for the taxman!`);
  let remainingDividendIncome = dividendIncome - dividendAllowance;
  if (remainingDividendIncome < 0) {
    let remainingdividendAllowance = Math.abs(remainingDividendIncome);
    console.log(
      `You have £${remainingdividendAllowance} remaining dividendAllowance.`
    );
  } else {
    console.log(
      `You have £${remainingDividendIncome} taxable dividend income after the £2000 dividendAllowance was exhausted.`
    );
    if (remainingDividendIncome > 150000) {
      let taxedAtDividendAdditionalRate = remainingDividendIncome - 150000;
      console.log(
        `As you have over £150k, £${taxedAtDividendAdditionalRate} will be taxed at 38.1%.`
      );
      wasTaxedAdditionalRate = taxedAtDividendAdditionalRate * 0.381;
      let remainingDividendAfterAdditionalRate =
        taxedAtDividendAdditionalRate - wasTaxedAdditionalRate;
      console.log(
        `You were taxed £${wasTaxedAdditionalRate} at the additional rate.`
      );
      console.log(`You have £${remainingDividendAfterAdditionalRate} left for yourself of the £${taxedAtDividendAdditionalRate} after additional rate tax was applied
      to everything over £150,000.`);
      remainingDividendIncome = 150000;
    }
  }
  if (remainingDividendIncome <= 150000) {
    let taxedAtDividendUpperRate = remainingDividendIncome - 37700;
    console.log(
      `As you have over 37.7k, £${taxedAtDividendUpperRate} will be taxed at 32.5%`
    );
    wasTaxedUpperRate = taxedAtDividendUpperRate * 0.325;
    let remainingDividendAfterUpperRate =
      taxedAtDividendUpperRate - wasTaxedUpperRate;
    console.log(`You were taxed £${wasTaxedUpperRate} at the additional rate.`);
    console.log(`You have £${remainingDividendAfterUpperRate} left for yourself of the £${taxedAtDividendUpperRate} after upper rate tax was applied
    to everything under £150,000 but above £37,700.`);
    remainingDividendIncome = 37700;
  }
  if (remainingDividendIncome <= 37700) {
    let taxedAtDividendOrdinaryRate = remainingDividendIncome;
    console.log(`£${taxedAtDividendOrdinaryRate} will be taxed at 7.5%`);
    wasTaxedOrdinaryRate = taxedAtDividendOrdinaryRate * 0.075;
    let remainingDividendAfterOrdinaryRate =
      taxedAtDividendOrdinaryRate - wasTaxedOrdinaryRate;
    console.log(
      `You were taxed £${wasTaxedOrdinaryRate} at the ordinary rate.`
    );
    console.log(`You have £${remainingDividendAfterOrdinaryRate} left for yourself of the £${taxedAtDividendOrdinaryRate} after ordinary rate tax was applied
    to everything under £37,700.`);
  }
  let totalTaxPaid =
    wasTaxedAdditionalRate + wasTaxedUpperRate + wasTaxedOrdinaryRate;
  let remainingIncomeAfterTax = dividendIncome - totalTaxPaid;
  console.log(
    `Of your £${dividendIncome}, you were taxed a total of £${totalTaxPaid} so will take home £${remainingIncomeAfterTax}. Dear me let's move our accounts to the Caymanns`
  );
}
computeDividendTaxAllowance(dividendIncome, dividendAllowance);
//DIVIDENDS CALCULATION
