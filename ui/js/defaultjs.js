// reminder page
// check if use my email is unchecked
const email_unchecked = document.getElementById('emailchecked');

const emaiilUnchecked = () => {
  if (email_unchecked.checked == true) {
    document.getElementById('emailinp').disabled = true;
  } else {
    document.getElementById('emailinp').disabled = false;
  }
};

if (email_unchecked) {
  email_unchecked.addEventListener('change', emaiilUnchecked);
}
