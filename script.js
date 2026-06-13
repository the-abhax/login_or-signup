

document.addEventListener('DOMContentLoaded', () => {
  attachRippleEffect();
  setupLoginForm();
  setupSignupForm();
  setupPasswordStrength();
});


function showError(inputEl, errorEl, message) {
  if (message) {
    errorEl.textContent = message;
    errorEl.classList.add('show');
    inputEl.classList.add('invalid');
    setTimeout(() => inputEl.classList.remove('invalid'), 400);
    return false;
  } else {
    errorEl.textContent = '';
    errorEl.classList.remove('show');
    return true;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}



function attachRippleEffect() {
  document.querySelectorAll('.btn-primary').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
}



function setupLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const emailError = document.getElementById('loginEmailError');
  const passwordError = document.getElementById('loginPasswordError');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    if (!emailInput.value.trim()) {
      valid = showError(emailInput, emailError, 'Email is required.') && valid;
    } else if (!isValidEmail(emailInput.value.trim())) {
      valid = showError(emailInput, emailError, 'Please enter a valid email address.') && valid;
    } else {
      showError(emailInput, emailError, '');
    }

    if (!passwordInput.value) {
      valid = showError(passwordInput, passwordError, 'Password is required.') && valid;
    } else if (passwordInput.value.length < 6) {
      valid = showError(passwordInput, passwordError, 'Password must be at least 6 characters.') && valid;
    } else {
      showError(passwordInput, passwordError, '');
    }

    if (valid) {
      showToast('Welcome back! Redirecting... 🎉');
      form.reset();
    }
  });


  [emailInput, passwordInput].forEach((input) => {
    input.addEventListener('input', () => {
      const errorEl = input === emailInput ? emailError : passwordError;
      showError(input, errorEl, '');
    });
  });
}



function setupSignupForm() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('signupEmail');
  const passwordInput = document.getElementById('signupPassword');
  const confirmInput = document.getElementById('confirmPassword');
  const termsInput = document.getElementById('agreeTerms');

  const nameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('signupEmailError');
  const passwordError = document.getElementById('signupPasswordError');
  const confirmError = document.getElementById('confirmPasswordError');
  const termsError = document.getElementById('agreeTermsError');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    if (!nameInput.value.trim()) {
      valid = showError(nameInput, nameError, 'Full name is required.') && valid;
    } else if (nameInput.value.trim().length < 2) {
      valid = showError(nameInput, nameError, 'Name seems too short.') && valid;
    } else {
      showError(nameInput, nameError, '');
    }

    if (!emailInput.value.trim()) {
      valid = showError(emailInput, emailError, 'Email is required.') && valid;
    } else if (!isValidEmail(emailInput.value.trim())) {
      valid = showError(emailInput, emailError, 'Please enter a valid email address.') && valid;
    } else {
      showError(emailInput, emailError, '');
    }

    if (!passwordInput.value) {
      valid = showError(passwordInput, passwordError, 'Password is required.') && valid;
    } else if (passwordInput.value.length < 8) {
      valid = showError(passwordInput, passwordError, 'Password must be at least 8 characters.') && valid;
    } else {
      showError(passwordInput, passwordError, '');
    }

    if (!confirmInput.value) {
      valid = showError(confirmInput, confirmError, 'Please confirm your password.') && valid;
    } else if (confirmInput.value !== passwordInput.value) {
      valid = showError(confirmInput, confirmError, 'Passwords do not match.') && valid;
    } else {
      showError(confirmInput, confirmError, '');
    }

    if (!termsInput.checked) {
      termsError.textContent = 'You must agree to the terms to continue.';
      termsError.classList.add('show');
      valid = false;
    } else {
      termsError.textContent = '';
      termsError.classList.remove('show');
    }

    if (valid) {
      showToast('Account created successfully! 🎊');
      form.reset();
      document.getElementById('strengthFill').style.width = '0%';
    }
  });

 
  const fieldMap = [
    [nameInput, nameError],
    [emailInput, emailError],
    [passwordInput, passwordError],
    [confirmInput, confirmError],
  ];
  fieldMap.forEach(([input, errorEl]) => {
    input.addEventListener('input', () => showError(input, errorEl, ''));
  });

  termsInput.addEventListener('change', () => {
    termsError.textContent = '';
    termsError.classList.remove('show');
  });
}


function setupPasswordStrength() {
  const passwordInput = document.getElementById('signupPassword');
  const fill = document.getElementById('strengthFill');
  if (!passwordInput || !fill) return;

  passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;

    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const percentages = ['10%', '35%', '65%', '85%', '100%'];
    const colors = ['#ff6b6b', '#ff6b6b', '#f5a623', '#f5d623', '#2cb67d'];

    fill.style.width = val.length === 0 ? '0%' : percentages[score];
    fill.style.background = val.length === 0 ? '#ff6b6b' : colors[score];
  });
}