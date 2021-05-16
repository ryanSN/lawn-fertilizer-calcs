import { lbsOfNitrogenInBagPerSqFt, howMuchAtRatePerThousandSqFeet } from '../index';

describe('Lbs of Nitrogen', () => {
  describe('lbs of Nitrogen in the bag', () => {
    test('lbs of Nitrogen in Bag 26-0-0, 19lb bag @ 5000 sqt', () => {
      expect(lbsOfNitrogenInBagPerSqFt(26, 19, 5000)).toBe(0.98);
    });
    test('lbs of Nitrogen in Bag 22-0-8, 35lb bag @ 10000 sqt', () => {
      expect(lbsOfNitrogenInBagPerSqFt(22, 35, 10000)).toBe(0.77);
    });
  });

  describe('howMuchAtRatePerThousandSqFeet', () => {
    test('1 lb per 1,000 sq feet in 26-5-10 50lb bag', () => {
      expect(howMuchAtRatePerThousandSqFeet(1, 26)).toBe(3.84);
    });

    test('.75lb of N per 1,000 sq feet in 22-0-8 35lb bag', () => {
      expect(howMuchAtRatePerThousandSqFeet(0.75, 22)).toBe(3.4);
    });

    test('.5lb of N per 1,000 sq feet in 22-0-8 35lb bag', () => {
      expect(howMuchAtRatePerThousandSqFeet(0.5, 22)).toBe(2.27);
    });
  });
});
