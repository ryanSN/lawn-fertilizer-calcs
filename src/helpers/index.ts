type toDecimal = (number: any, decimalPlaces: any) => number;

export const roundAccurately: toDecimal = (number: number, decimalPlaces: number = 2): number => {
  const numberString: string = number.toString();
  const pointIndex: number = numberString.indexOf('.');

  // Return the integer part if decimalPlaces is 0
  if (decimalPlaces === 0) {
    return +numberString.substr(0, pointIndex);
  }

  // Return value with 0s appended after decimal if the number is an integer
  if (pointIndex === -1) {
    const padZeroString: string = '0'.repeat(decimalPlaces);

    return +`${numberString}.${padZeroString}`;
  }

  // If numbers after decimal are less than decimalPlaces, append with 0s
  const padZeroLen: number = numberString.length - pointIndex - 1;
  if (padZeroLen > 0 && padZeroLen < decimalPlaces) {
    const padZeroString: string = '0'.repeat(padZeroLen);

    return +`${numberString}${padZeroString}`;
  }

  return +numberString.substr(0, pointIndex + decimalPlaces + 1);
};
