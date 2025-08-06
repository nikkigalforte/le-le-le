const nameInput = document.getElementById('name_input_field');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
  const userName = nameInput.value;
  if (userName.trim() !== '') {
    alert(`le le le ${userName}, вы лох`);
  } else {
    alert('Пожалуйста, введите ваше имя!');
  }
});