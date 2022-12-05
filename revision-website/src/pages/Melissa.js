import React, { useState } from "react";
import Display from "../components/Display";
import Input from "../components/Input";
import Button from "../components/Button";

const Melissa = () => {
  const [dividendIncome, setDividendIncome] = useState("");
  const [dividendAllowance, setDividendAllowance] = useState("");
  const [resultsDisplay, setResultsDisplay] = useState([]);

  function handleClick() {
    setResultsDisplay(
      computeDividendTaxAllowance(dividendIncome, dividendAllowance)
    );
    console.log(dividendAllowance, dividendIncome);
    setDividendAllowance("");
    setDividendIncome("");
  }

  function handleChangeIncome(event) {
    setDividendIncome(event.target.value);
  }

  function handleChangeAllowance(event) {
    setDividendAllowance(event.target.value);
  }
  return (
    <>
      <h1>A calculator to compute dividend payments.</h1>
      <div>
        Sadly this is not yet accurate as it only takes into account dividends,
        not other taxation. Therefore the tax bands evaluated are most likely
        incorrect.
      </div>
      <div>
        <Input
          h3prop="Dividend Income"
          placeholder="£value"
          type="number"
          onChange={handleChangeIncome}
        ></Input>
        <Input
          h3prop="Dividend Allowance"
          placeholder="£value"
          type="number"
          onChange={handleChangeAllowance}
        ></Input>
        <Button
          className="submit"
          onClick={handleClick}
          text={"submit"}
        ></Button>
      </div>
      <Display
        h3prop="output"
        placeholder="put in values to get returns"
        text={resultsDisplay}
      ></Display>
    </>
  );
};

export default Melissa;

/*
SAVINGS:
savings income - PSA  = "remaining taxable savings" or "remaining PSA"
*/

//SAVINGS CALCULATION
// let savingsIncome = 1000;
// const PSA = 5000;
// function computeSavingsTax(savingsIncome, PSA) {
//   const result = savingsIncome - PSA;
//   if (result < 0) {
//     const remainingPSA = Math.abs(result);
//     returnsArray.push(`You have £${remainingPSA} remaining PSA.`);
//   } else {
//     returnsArray.push(
//       `You have £${result} taxable savings income after PSA exhausted.`
//     );
//   }
// }
// computeSavingsTax(savingsIncome, PSA);
// //SAVINGS CALCULATION

/*
DIVIDENDS:
dividend income - dividend allowance = remaining taxable dividend income
if remaining taxable dividend income > 150,000 : that which is over 150,000 is taxed at 38.1%
if remaining taxable dividend income > 37,700 : all between 37,700 and 150,000 is taxed at 32.5%
if remaining taxable dividend income < 37,700 : all is taxed at 7.5%
add the dividend allowance to the profit


*/

//DIVIDENDS CALCULATION
function computeDividendTaxAllowance(dividendIncome, dividendAllowance) {
  const result = [];
  let wasTaxedAdditionalRate = 0;
  let wasTaxedUpperRate = 0;
  let wasTaxedOrdinaryRate = 0;
  result.push(`You have £${dividendIncome}, get ready for the taxman!`);
  let remainingDividendIncome = dividendIncome - dividendAllowance;
  if (remainingDividendIncome < 0) {
    let remainingdividendAllowance = Math.abs(remainingDividendIncome);
    result.push(
      `You have £${remainingdividendAllowance} remaining dividendAllowance.`
    );
  } else {
    result.push(
      `You have £${remainingDividendIncome} taxable dividend income after the £2000 dividendAllowance was exhausted.`
    );
    if (remainingDividendIncome > 150000) {
      let taxedAtDividendAdditionalRate = remainingDividendIncome - 150000;
      result.push(
        `As you have over £150k, £${taxedAtDividendAdditionalRate} will be taxed at 38.1%.`
      );
      wasTaxedAdditionalRate = taxedAtDividendAdditionalRate * 0.381;
      let remainingDividendAfterAdditionalRate =
        taxedAtDividendAdditionalRate - wasTaxedAdditionalRate;
      result.push(
        `You were taxed £${wasTaxedAdditionalRate} at the additional rate.`
      );
      result.push(
        `You have £${remainingDividendAfterAdditionalRate} left for yourself of the £${taxedAtDividendAdditionalRate} after additional rate tax was applied to everything over £150,000.`
      );
      remainingDividendIncome = 150000;
    }
  }
  if (remainingDividendIncome <= 150000) {
    let taxedAtDividendUpperRate = remainingDividendIncome - 37700;
    result.push(
      `As you have over 37.7k, £${taxedAtDividendUpperRate} will be taxed at 32.5%`
    );
    wasTaxedUpperRate = taxedAtDividendUpperRate * 0.325;
    let remainingDividendAfterUpperRate =
      taxedAtDividendUpperRate - wasTaxedUpperRate;
    result.push(`You were taxed £${wasTaxedUpperRate} at the additional rate.`);
    result.push(
      `You have £${remainingDividendAfterUpperRate} left for yourself of the £${taxedAtDividendUpperRate} after upper rate tax was applied to everything under £150,000 but above £37,700.`
    );
    remainingDividendIncome = 37700;
  }
  if (remainingDividendIncome <= 37700) {
    let taxedAtDividendOrdinaryRate = remainingDividendIncome;
    result.push(`£${taxedAtDividendOrdinaryRate} will be taxed at 7.5%`);
    wasTaxedOrdinaryRate = taxedAtDividendOrdinaryRate * 0.075;
    let remainingDividendAfterOrdinaryRate =
      taxedAtDividendOrdinaryRate - wasTaxedOrdinaryRate;
    result.push(
      `You were taxed £${wasTaxedOrdinaryRate} at the ordinary rate.`
    );
    result.push(
      `You have £${remainingDividendAfterOrdinaryRate} left for yourself of the £${taxedAtDividendOrdinaryRate} after ordinary rate tax was applied to everything under £37,700.`
    );
  }
  let totalTaxPaid =
    wasTaxedAdditionalRate + wasTaxedUpperRate + wasTaxedOrdinaryRate;
  let remainingIncomeAfterTax = dividendIncome - totalTaxPaid;
  let remainingIncomeAfterTaxPlusAllowance =
    remainingIncomeAfterTax + dividendAllowance;
  result.push(
    `Of your £${dividendIncome}, you were taxed a total of £${totalTaxPaid}. Including your dividend allowance of £${dividendAllowance}, you will take home £${remainingIncomeAfterTaxPlusAllowance}. Dear me! Let's move our accounts to the Caymanns!`
  );
  return result;
}
//DIVIDENDS CALCULATION

/*
INCOME TAX:

*/
