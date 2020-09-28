function handleSignUpFormSubmit(e) {
	// prevent default browser behaviour
	e.preventDefault();

	const formDataEntries = new FormData(signupForm).entries();
	const { email, password } = Object.fromEntries(formDataEntries);

	// submit email and password to an API

	const emailErrorMessage = validateEmail(email);
	const passwordErrorMessage = validatePassword(password);

	if (!emailErrorMessage) {
		// select the email form field mesage element
		const emailErrorMessageElement = document.querySelector(".email .error");
		// show email error message to user
		emailErrorMessageElement.innerText = emailErrorMessage;
	}

	if (passwordErrorMessage) {
		// select the email from field message element
		const passwordErrorMessageElement = document.querySelector(".password .error");
		// show password error message to user
	}	passwordErrorMessageElement.innerText = passwordErrorMessage;
}

function validatePassword(password, minlength) {
	if (!password) return 'Password is required';

	if(password.length < minlength) {
		return `Please enter a password that's at least ${minlength} characters long`;
	}

	const hasCapitalLetter = /[A-Z]/g;
	if (!hasCapitalLetter.test(password)) {
		return 'Please use at least one capital letter;';
	}

	const hasNumber = /\d/g;
	if (!hasNumber.test(password)) {
		return 'Please use at least one number.';
	}

	return '';
}

function validateEmail(email) {
	if (!email) return 'Email is required';

	const isValidEmail = /^\S+@\S+$/g
	if (!isValidEmail.test(email)) {
		return 'Please enter a valid email';
	}

	return '';
}

