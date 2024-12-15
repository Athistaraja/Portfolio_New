

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'Athistaraja-R.pdf'; // Specify the path to the PDF file
  link.download = 'Athistaraja-R'; // Optional: specify the file name
  link.click();
}

function toggleMenu() {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('active');
}
  
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
