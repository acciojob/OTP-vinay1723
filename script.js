//your JS code here. If required.
const inputs = document.getElementById('code-container');
inputs.addEventListener('input',(e) => {
	e.preventDefault();
	let input = e.target;

	if (!/^[0-9]?$/.test(input.value)) {
		input.value = "";
		return;
	}

	if (input.value && input.nextElementSibling) {
		input.nextElementSibling.focus();
	}
})

inputs.addEventListener('keydown', (event) => {
    const input = event.target;
    if (input.tagName !== 'INPUT') return;

    
    if (event.key === 'Backspace' && input.value === '') {
      if (input.previousElementSibling) {
        input.previousElementSibling.focus();
      }
    }
  });

