const commentCounter = () => {
  const ulComments = document.querySelectorAll("#comments li");
  const hComments = document.getElementById("comments-counter");
  hComments.textContent = "Comments("+ulComments.length+")";
};

export default commentCounter;