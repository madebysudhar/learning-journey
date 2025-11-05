// ---------- 1) Cache DOM elements (const because references won't change)
const form    = document.getElementById('patientForm');
const nameEl  = document.getElementById('name');
const ageEl   = document.getElementById('age');
const emailEl = document.getElementById('email');
const symEl   = document.getElementById('symptom');
const msgEl   = document.getElementById('message');

// ---------- 2) Helpers
const showMessage = (text, type = 'error') => {
  msgEl.textContent = text;
  msgEl.classList.remove('hidden', 'error', 'success');
  msgEl.classList.add(type); // 'error' or 'success'
};

const clearMessage = () => {
  msgEl.textContent = '';
  msgEl.classList.add('hidden');
  msgEl.classList.remove('error', 'success');
};

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email); // simple, practical

// ---------- 3) Submit handler (this is a function)
form.addEventListener('submit', (event) => {
  event.preventDefault(); // don't reload the page
  clearMessage();

  // VARIABLES: read and normalize input values
  const name     = nameEl.value.trim();      // string
  const ageStr   = ageEl.value.trim();       // string (from input)
  const email    = emailEl.value.trim();     // string
  const symptoms = symEl.value.trim();       // string

  // Convert age to number safely
  const age = Number(ageStr);                // number

  console.log({ name, age, email, symptoms }); // DEBUG

  // ---------- 4) VALIDATIONS (if any fail, show and return)
  if (!name || !ageStr || !email || !symptoms) {
    showMessage('All fields are required.', 'error');
    return;
  }

  if (!Number.isFinite(age) || age <= 0) {
    showMessage('Age must be a positive number.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }

  // ---------- 5) SUCCESS
  showMessage('Form submitted successfully!', 'success');

  // Here’s your data as an OBJECT (key-value pair)
  const patient = { name, age, email, symptoms }; // object
  console.log('Patient object:', patient);

  // Clear the form after success
  form.reset();
});
