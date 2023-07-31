function validateLogin() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');

  if (usernameInput.value.toLowerCase() === 'abi' && passwordInput.value === 'naga') {
    // Redirect to the Proposal for Abi site
    window.location.href = 'proposal.html';
    return false;
  } else {
    errorMessage.textContent = "Invalid username or password. Please try again.";
    return false;
  }
}
