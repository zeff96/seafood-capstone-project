import { getAllLikes } from "./getAllData";

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        likes: {
          item_id: 'item1',
        },
      },
      {
        likes: {
          item_id: 'item1',
        },
      },
    ],
  ),
}));

describe('likes counter', () => {
  it ('test likes counter', async () => {
    const res = await getAllLikes();

    expect(res).toBe(2);
  })
});
