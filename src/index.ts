import { roundAccurately } from './helpers';

export const lbsOfNitrogenInBagPerSqFt = (
  Nnumber: number,
  bagweight: number,
  sqftBagSupports: number,
) => {
  // dvivde lbs of n by the area the bag states to get lbs per 1,000 sq ft
  const lbInBag = bagweight * (Nnumber / 100);
  return roundAccurately((lbInBag / sqftBagSupports) * 1000, 2);
};

// How many lbs of Bag per sq feet is needed to supply at rate desired.
export const howMuchAtRatePerThousandSqFeet = (rateInlb: number = 1, NnumberOnBag: number) => {
  return roundAccurately(rateInlb / (NnumberOnBag / 100), 2);
};
