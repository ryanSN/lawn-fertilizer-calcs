import { lbsOfNitrogenInBagPerSqFt, howMuchAtRatePerThousandSqFeet } from '../index';

describe('Lbs of Nitrogen', () => {
  test('lbs of Nitrogen in Bag', () => {
    expect(lbsOfNitrogenInBagPerSqFt(26, 19, 5000)).toBe(0.98);
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
