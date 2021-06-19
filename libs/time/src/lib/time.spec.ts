import { date } from './time';

describe('time', () => {
  it('should work', () => {
    expect(date(new Date('2022-06-16'))).toEqual('2022-06-16');
  });
});
