/**
 * @jest-environment jsdom
 */
import commentCounter from "./commentCounter.js";
import getComments from "./getComments.js";
import { renderFoodComments } from "./renderComments.js";

global.fetch = jest.fn(() =>{
  const testData = [
    {
      item_id: "item1",
      username: "Shubham",
      comment: "Hello"
    },
    {
      item_id: "item1",
      username: "Enis",
      comment: "Welcome"
    },
    {
      item_id: "item1",
      username: "zeff",
      comment: "Hello"
    },
  ]
  return Promise.resolve({
    json: () => Promise.resolve(testData),
  })
});

beforeEach(() => {
  fetch.mockClear();
});

describe("Comments counter test",() => {
  test("Zero Comment test", () => {
     document.body.innerHTML = '<div>'
    + '<h3 id="comments-counter"></h3>'
    + '  <ul id="comments"></ul>'
    + '</div>';
    commentCounter();
    const hComments = document.getElementById("comments-counter");
    expect(hComments.textContent).toBe("Comments(0)");
  });

  test("Add 3 comments === Comments(3)", () => {
    document.body.innerHTML = '<div>'
   + '<h3 id="comments-counter"></h3>'
   + '  <ul id="comments"></ul>'
   + '</div>';
      getComments("item1").then(data => {
      renderFoodComments(data);
      const hComments = document.getElementById("comments-counter");
      expect(hComments.textContent).toBe("Comments(3)");
    }); 
 });
});