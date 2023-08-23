// Select all input elements with class "controls"
const inputs = document.querySelectorAll('.controls input');

// Add a 'change' event listener to each input element
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// Add a 'mousemove' event listener to each input element
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

// Function that handles the updates based on input changes or mouse movement
function handleUpdate() {
    // Retrieve the 'data-sizing' attribute value from the input, or an empty string if it's not present
    const suffix = this.dataset.sizing || '';

    // Update a CSS variable (custom property) with the calculated value from the input
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
