

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


