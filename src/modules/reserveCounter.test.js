import { reservationsUrl } from './getApi';

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve([
    {
      item_id: 2,
      username: 'Enis',
      date_start: '2023-09-22',
      date_end: '2023-10-16',
    },
    {
      item_id: 2,
      username: 'Shubam',
      date_start: '2023-10-15',
      date_end: '2023-10-16',
    },
  ]),
});
describe('Testing resevations counter', () => {
  test('count reservations', async () => {
    const reserving = await fetch(`${reservationsUrl}?item_id=2`);
    const reserve = await reserving.json();
    const size = reserve.length;
    expect(size).toBe(2);
  });
});
