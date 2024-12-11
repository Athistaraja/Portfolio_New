// setInterval(() => {
//     const text = document.querySelector('.highlight');
//     text.classList.remove('highlight');
//     void text.offsetWidth; // Trigger reflow to restart animation
//     text.classList.add('highlight');
//   }, 5000); // Restart every 5 seconds
  
const highlightText = document.getElementById("highlight");

// Array of titles to cycle through
const titles = [ "Backend Developer", "Full Stack Developer", "UI/UX", "Web"];
let index = 0;

// Function to change the highlight text
function changeHighlight() {
  // Update the text content
  highlightText.textContent = titles[index];

  // Restart animations
  highlightText.classList.remove("highlight");
  void highlightText.offsetWidth; // Trigger reflow to restart animation
  highlightText.classList.add("highlight");

  // Move to the next title
  index = (index + 1) % titles.length; // Loop back to the first item
}

// Change text every 10 seconds
setInterval(changeHighlight, 5000);
