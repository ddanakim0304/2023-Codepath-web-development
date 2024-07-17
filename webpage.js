// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}


// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.

const addSignature = (person) => {
  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports protecting whales 🐋`;

  const signaturesDiv = document.querySelector('.signatures');
  signaturesDiv.appendChild(newSignature);
};

const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  let person = {}; // Declaring person object

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }

    // Assign values to the person object
    switch (i) {
      case 0:
        person.name = petitionInputs[i].value;
        break;
      case 1:
        person.hometown = petitionInputs[i].value;
        break;
      case 2:
        person.email = petitionInputs[i].value;
        break;
      default:
        break;
    }
  }
  
  let scaleFactor = 1; // New variable for scaleFactor

  const modalImage = document.querySelector('#thanks-modal img'); // Selecting the image within the modal

  const scaleImage = () => {
    // Toggle the image size between a factor of 1 and 0.8
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;

    // Apply the scaleFactor to the image using CSS transform
    modalImage.style.transform = `scale(${scaleFactor})`;
  };
  
  const toggleModal = (person) => {
    // Select the modal and modal content elements
    const modal = document.getElementById('thanks-modal');
    const modalContent = document.getElementById('modal-text-container');

    // Set the display style property of the entire modal to flex
    modal.style.display = 'flex';

    // Display a thank you message to the user using the person's name
    modalContent.textContent = `Thank you so much ${person.name}! We appreciate your support!`;
    const intervalId = setInterval(scaleImage, 500);
    
    // Hide the modal after a few seconds using setTimeout
    setTimeout(() => {
      modal.style.display = 'none';
    }, 4000); // Modal will disappear after 4 seconds (4000 milliseconds)
  };


  if (!containsErrors) {
    addSignature(person); // Pass the person object to addSignature function

    // Call toggleModal with the person argument after adding the signature
    toggleModal(person);

    // Clear the input fields
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
};





// Add a click event listener to the sign now button
const signNowButton = document.getElementById("sign-now-button");
signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

// Select all elements with the class 'revealable'
let revealableContainers = document.querySelectorAll('.revealable');

// Function to reveal elements based on scroll position
// Function to reveal elements based on scroll position
function reveal() {
  let revealableContainers = document.querySelectorAll('.revealable');

  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active'); // Add the 'active' class
    } else {
      revealableContainers[i].classList.remove('active'); // Remove the 'active' class
    }
  }
}

// Call the reveal function on scroll
window.addEventListener('scroll', reveal);

// Initial check for elements already in the viewport on page load
window.addEventListener('load', reveal);
window.addEventListener('resize', reveal); // In case the window is resized
