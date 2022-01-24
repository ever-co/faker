import { beforeEach, describe, expect, it } from 'vitest';
import { faker } from '../dist/cjs';

const seededRuns = [
  {
    seed: 42,
    expectations: {
      cityName: 'South Carmelo',
      streetName: 'Carmelo Forks',
      streetAddressDigits: 5,
      fullStreetAddress: '51225 Hammes Lodge Apt. 552',
      secondaryAddress: 'Apt. 512',
      county: 'Bedfordshire',
      country: 'Equatorial Guinea',
      countryCode: 'EH',
      state: 'Indiana',
      zipCode: '51225',
      direction: 'South',
      directionNonAbbr: 'South',
      directionAbbr: 'S',
      ordinalDirection: 'Northwest',
      ordinalDirectionAbbr: 'NW',
      cardinalDirection: 'East',
      cardinalDirectionAbbr: 'E',
      timeZone: 'Africa/Casablanca',
    },
  },
  {
    seed: 1337,
    expectations: {
      cityName: 'South Carmelo',
      streetName: 'Carmelo Forks',
      streetAddressDigits: 5,
      fullStreetAddress: '51225 Hammes Lodge Apt. 552',
      secondaryAddress: 'Apt. 512',
      county: 'Bedfordshire',
      country: 'Equatorial Guinea',
      countryCode: 'EH',
      state: 'Indiana',
      zipCode: '51225',
      direction: 'South',
      directionNonAbbr: 'South',
      directionAbbr: 'S',
      ordinalDirection: 'Northwest',
      ordinalDirectionAbbr: 'NW',
      cardinalDirection: 'East',
      cardinalDirectionAbbr: 'E',
      timeZone: 'Africa/Casablanca',
    },
  },
];

const NON_SEEDED_BASED_RUN = 5;

describe('address', () => {
  for (let { seed, expectations } of seededRuns) {
    beforeEach(() => {
      faker.seed(seed);
    });

    describe(`seed: ${seed}`, () => {
      it('city()', () => {
        const city = faker.address.city();
        expect(city).toEqual(expectations.cityName);
      });

      it('streetName()', () => {
        const street_name = faker.address.streetName();
        expect(street_name).toEqual(expectations.streetName);
      });

      describe('streetAddress()', () => {
        it('should return a digit street number', () => {
          const address = faker.address.streetAddress();
          const parts = address.split(' ');

          expect(
            parts[0].length,
            `The street number should had ${expectations.streetAddressDigits} digits`
          ).toStrictEqual(expectations.streetAddressDigits);
        });

        describe('when useFulladdress is true', () => {
          it('adds a secondary address to the result', () => {
            const address = faker.address.streetAddress(true);
            expect(address).toEqual(expectations.fullStreetAddress);
          });
        });
      });

      describe('secondaryAddress()', () => {
        it('randomly chooses an Apt or Suite number', () => {
          const address = faker.address.secondaryAddress();
          expect(address).toEqual(expectations.secondaryAddress);
        });
      });

      describe('county()', () => {
        it('returns random county', () => {
          const county = faker.address.county();
          expect(county).toEqual(expectations.county);
        });
      });

      describe('country()', () => {
        it('returns random country', () => {
          const country = faker.address.country();
          expect(country).toEqual(expectations.country);
        });
      });

      describe('countryCode()', () => {
        it('returns random countryCode', () => {
          const countryCode = faker.address.countryCode();
          expect(countryCode).toEqual(expectations.countryCode);
        });
      });

      describe('state()', () => {
        it('returns random state', () => {
          const state = faker.address.state();
          expect(state).toEqual(expectations.state);
        });
      });

      describe('zipCode()', () => {
        it('returns random zipCode', () => {
          const zipCode = faker.address.zipCode();
          expect(zipCode).toEqual(expectations.zipCode);
        });
      });

      describe('direction()', () => {
        it('returns random direction', () => {
          const direction = faker.address.direction();
          const expected = expectations.direction;

          expect(
            direction,
            'The random direction should be equals ' + expected
          ).toBe(expected);
        });

        // TODO christopher 2022-01-24: This implementation should be corrected
        it.skip('should not return abbreviation when useAbbr is false', () => {
          const direction = faker.address.direction(false);
          const expected = expectations.directionNonAbbr;

          expect(
            direction,
            `The abbreviation of direction when useAbbr is false should be equals ${expected}. Current is ${direction}`
          ).toBe(expected);
        });

        it('returns abbreviation when useAbbr is true', () => {
          const direction = faker.address.direction(true);
          const expected = expectations.directionAbbr;

          expect(
            direction,
            `The abbreviation of direction when useAbbr is true should be equals ${expected}. Current is ${direction}`
          ).toBe(expected);
        });
      });

      describe('ordinalDirection()', () => {
        it('returns random ordinal direction', () => {
          const ordinalDirection = faker.address.ordinalDirection();
          const expected = expectations.ordinalDirection;

          expect(
            ordinalDirection,
            `The ransom ordinal direction should be equals ${expected}. Current is ${ordinalDirection}`
          ).toBe(expected);
        });

        it('returns abbreviation when useAbbr is true', () => {
          const ordinalDirection = faker.address.ordinalDirection(true);
          const expected = expectations.ordinalDirectionAbbr;

          expect(
            ordinalDirection,
            `The ordinal direction when useAbbr is true should be equals ${expected}. Current is ${ordinalDirection}`
          ).toBe(expected);
        });
      });

      describe('cardinalDirection()', () => {
        it('returns random cardinal direction', () => {
          const cardinalDirection = faker.address.cardinalDirection();
          const expected = expectations.cardinalDirection;

          expect(
            cardinalDirection,
            `The random cardinal direction should be equals ${expected}. Current is ${cardinalDirection}`
          ).toBe(expected);
        });

        it('returns abbreviation when useAbbr is true', () => {
          const cardinalDirection = faker.address.cardinalDirection(true);
          const expected = expectations.cardinalDirectionAbbr;

          expect(
            cardinalDirection,
            `The cardinal direction when useAbbr is true should be equals ${expected}. Current is ${cardinalDirection}`
          ).toBe(expected);
        });
      });

      describe('timeZone()', () => {
        it('returns random timeZone', () => {
          const timeZone = faker.address.timeZone();
          expect(timeZone).toEqual(expectations.timeZone);
        });
      });
    });
  }

  describe('non seed-based tests', () => {
    for (let i = 1; i <= NON_SEEDED_BASED_RUN; i++) {
      describe('countryCode()', () => {
        it('returns random alpha-3 countryCode', () => {
          const countryCode = faker.address.countryCode('alpha-3');

          expect(countryCode).toBeTruthy();
          expect(
            countryCode.length,
            'The countryCode should be had 3 characters'
          ).toBe(3);
        });
      });

      describe('zipCode()', () => {
        it('returns random zipCode - user specified format', () => {
          let zipCode = faker.address.zipCode('?#? #?#');

          expect(zipCode).match(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/);

          // try another format
          zipCode = faker.address.zipCode('###-###');

          expect(zipCode).match(/^\d{3}-\d{3}$/);
        });

        it('returns zipCode with proper locale format', () => {
          // we'll use the en_CA locale..
          faker.locale = 'en_CA';
          const zipCode = faker.address.zipCode();

          expect(zipCode).match(/^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/);
        });
      });

      describe('zipCodeByState()', () => {
        it('returns zipCode valid for specified State', () => {
          faker.locale = 'en_US';
          const states = ['IL', 'GA', 'WA'];

          const zipCode1 = faker.address.zipCodeByState(states[0]);
          expect(zipCode1).greaterThanOrEqual(60001);
          expect(zipCode1).lessThanOrEqual(62999);

          const zipCode2 = faker.address.zipCodeByState(states[1]);
          expect(zipCode2).greaterThanOrEqual(30001);
          expect(zipCode2).lessThanOrEqual(31999);

          const zipCode3 = faker.address.zipCodeByState(states[2]);
          expect(zipCode3).greaterThanOrEqual(98001);
          expect(zipCode3).lessThanOrEqual(99403);
        });

        // TODO @Shinigami92 2022-01-24: These two tests were invalid and just tested mocks.
        //
        // it('returns undefined if state is invalid', () => {
        //   const state = 'XX';
        //
        //   const zipCodeByState = faker.address.zipCodeByState(state);
        //   expect(zipCodeByState).toBeUndefined();
        // });
        //
        // it('returns undefined if state is valid but locale is invalid', () => {
        //   faker.locale = 'zh_CN';
        //   const state = 'IL';
        //
        //   const zipCodeByState = faker.address.zipCodeByState(state);
        //   expect(zipCodeByState).toBeUndefined();
        // });
      });

      describe('latitude()', () => {
        it('returns random latitude', () => {
          for (let i = 0; i < 100; i++) {
            const latitude = faker.address.latitude();

            expect(typeof latitude).toBe('string');

            const latitude_float = parseFloat(latitude);

            expect(latitude_float).greaterThanOrEqual(-90.0);
            expect(latitude_float).lessThanOrEqual(90.0);
          }
        });

        it('returns latitude with min and max and default precision', () => {
          for (let i = 0; i < 100; i++) {
            const latitude = faker.address.latitude(-5, 5);

            expect(typeof latitude).toBe('string');
            expect(
              latitude.split('.')[1].length,
              'The precision of latitude should be had of 4 digits'
            ).toBe(4);

            const latitude_float = parseFloat(latitude);

            expect(latitude_float).greaterThanOrEqual(-5);
            expect(latitude_float).lessThanOrEqual(5);
          }
        });

        it('returns random latitude with custom precision', () => {
          for (let i = 0; i < 100; i++) {
            const latitude = faker.address.latitude(undefined, undefined, 7);

            expect(typeof latitude).toBe('string');
            expect(
              latitude.split('.')[1].length,
              'The precision of latitude should be had of 7 digits'
            ).toBe(7);

            const latitude_float = parseFloat(latitude);

            expect(latitude_float).greaterThanOrEqual(-180);
            expect(latitude_float).lessThanOrEqual(180);
          }
        });
      });

      describe('longitude()', () => {
        it('returns random longitude', () => {
          for (let i = 0; i < 100; i++) {
            const longitude = faker.address.longitude();

            expect(typeof longitude).toBe('string');

            const longitude_float = parseFloat(longitude);

            expect(longitude_float).greaterThanOrEqual(-180);
            expect(longitude_float).lessThanOrEqual(180);
          }
        });

        it('returns random longitude with min and max and default precision', () => {
          for (let i = 0; i < 100; i++) {
            const longitude = faker.address.longitude(100, -30);

            expect(typeof longitude).toBe('string');
            expect(
              longitude.split('.')[1].length,
              'The precision of longitude should be had of 4 digits'
            ).toBe(4);

            const longitude_float = parseFloat(longitude);

            expect(longitude_float).greaterThanOrEqual(-30);
            expect(longitude_float).lessThanOrEqual(100);
          }
        });

        it('returns random longitude with custom precision', () => {
          for (let i = 0; i < 100; i++) {
            const longitude = faker.address.longitude(undefined, undefined, 7);

            expect(typeof longitude).toBe('string');
            expect(
              longitude.split('.')[1].length,
              'The precision of longitude should be had of 7 digits'
            ).toBe(7);

            const longitude_float = parseFloat(longitude);

            expect(longitude_float).greaterThanOrEqual(-180);
            expect(longitude_float).lessThanOrEqual(180);
          }
        });
      });

      describe('direction()', () => {
        it('returns abbreviation when useAbbr is true', () => {
          const direction = faker.address.direction(true);
          const lengthDirection = direction.length;
          const prefixErrorMessage =
            'The abbreviation of direction when useAbbr is true should';

          expect(
            typeof direction,
            `${prefixErrorMessage} be typeof string. Current is ${typeof direction}`
          ).toBe('string');
          expect(
            lengthDirection <= 2,
            `${prefixErrorMessage} have a length less or equals 2. Current is ${lengthDirection}`
          ).toBe(true);
        });
      });

      describe('ordinalDirection()', () => {
        it('returns abbreviation when useAbbr is true', () => {
          const ordinalDirection = faker.address.ordinalDirection(true);
          const expectedType = 'string';
          const ordinalDirectionLength = ordinalDirection.length;
          const prefixErrorMessage =
            'The ordinal direction when useAbbr is true should';

          expect(
            typeof ordinalDirection,
            `${prefixErrorMessage} be had typeof equals ${expectedType}. Current is ${typeof ordinalDirection}`
          ).toBe(expectedType);
          expect(
            ordinalDirectionLength <= 2,
            `${prefixErrorMessage} have a length less or equals 2. Current is ${ordinalDirectionLength}`
          ).toBe(true);
        });
      });

      describe('cardinalDirection()', () => {
        it('returns abbreviation when useAbbr is true', () => {
          const cardinalDirection = faker.address.cardinalDirection(true);
          const expectedType = 'string';
          const cardinalDirectionLength = cardinalDirection.length;
          const prefixErrorMessage =
            'The cardinal direction when useAbbr is true should';

          expect(
            typeof cardinalDirection,
            `${prefixErrorMessage} be had typeof equals ${expectedType}. Current is ${typeof cardinalDirection}`
          ).toBe(expectedType);
          expect(
            cardinalDirectionLength <= 2,
            `${prefixErrorMessage} have a length less or equals 2. Current is ${cardinalDirectionLength}`
          ).toBe(true);
        });
      });

      describe('nearbyGPSCoordinate()', () => {
        it('returns random gps coordinate within a distance of another one', () => {
          function haversine(lat1, lon1, lat2, lon2, isMetric) {
            function degreesToRadians(degrees) {
              return degrees * (Math.PI / 180.0);
            }
            function kilometersToMiles(miles) {
              return miles * 0.621371;
            }
            const R = 6378.137;
            const dLat = degreesToRadians(lat2 - lat1);
            const dLon = degreesToRadians(lon2 - lon1);
            const a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(degreesToRadians(lat1)) *
                Math.cos(degreesToRadians(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
            const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            return isMetric ? distance : kilometersToMiles(distance);
          }

          let latFloat1: number;
          let lonFloat1: number;
          let isMetric: boolean;

          for (let i = 0; i < 10000; i++) {
            latFloat1 = parseFloat(faker.address.latitude());
            lonFloat1 = parseFloat(faker.address.longitude());
            const radius = Math.random() * 99 + 1; // range of [1, 100)
            isMetric = Math.round(Math.random()) == 1;

            const coordinate = faker.address.nearbyGPSCoordinate(
              [latFloat1, lonFloat1],
              radius,
              isMetric
            );

            expect(coordinate.length).toBe(2);
            expect(typeof coordinate[0]).toBe('string');
            expect(typeof coordinate[1]).toBe('string');

            const latFloat2 = parseFloat(coordinate[0]);
            expect(latFloat2).greaterThanOrEqual(-90.0);
            expect(latFloat2).lessThanOrEqual(90.0);

            const lonFloat2 = parseFloat(coordinate[1]);
            expect(lonFloat2).greaterThanOrEqual(-180.0);
            expect(lonFloat2).lessThanOrEqual(180.0);

            // Due to floating point math, and constants that are not extremely precise,
            // returned points will not be strictly within the given radius of the input
            // coordinate. Using a error of 1.0 to compensate.
            const error = 1.0;
            const actualDistance = haversine(
              latFloat1,
              lonFloat1,
              latFloat2,
              lonFloat2,
              isMetric
            );
            expect(actualDistance).lessThanOrEqual(radius + error);
          }

          // test once with undefined radius
          const coordinate = faker.address.nearbyGPSCoordinate(
            [latFloat1, lonFloat1],
            undefined,
            isMetric
          );
          expect(coordinate.length).toBe(2);
          expect(typeof coordinate[0]).toBe('string');
          expect(typeof coordinate[1]).toBe('string');
        });
      });
    }
  });
});
