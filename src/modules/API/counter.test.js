import getAllData from "./getMeals";

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [
      {
        show: {
          strMeal: "Baked salmon with fennel & tomatoes",
          strMealThumb: 'https://themeldb.com/images/media/meals/1548772327.jpg',
          idMeal: '52959',
        },
      },
      {
        show: {
          strMeal: "Cajum spiced fish tacos",
          strMealThumb: 'https://themeldb.com/images/media/meals/1548772327.jpg',
          idMeal: '52819',
        },
      },
    ],
  ),
}));

describe('items counter tests using Jest', () => {
  test('test getmeals function to the result', async () => {
    const response = await getAllData();

    expect(response).toBe(2);
  });
});