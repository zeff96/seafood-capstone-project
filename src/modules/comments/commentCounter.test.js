/**
 * @jest-environment jsdom
 */
import commentCounter from "./commentCounter.js";
describe("Comments counter test",() => {
  test("Zero Comment test", () => {
     document.body.innerHTML = '<div>'
    + '  <ul id="comments"></ul>'
    + '</div>';
    commentCounter();
    const list = document.querySelectorAll('#comments li');
    expect(list).toHaveLength(0);
  });
});