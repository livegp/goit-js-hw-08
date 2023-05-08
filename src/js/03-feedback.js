import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = form.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputTextarea, 500));

let formData = {
    email: '',
    message: '',
};

function onInputTextarea(e) {

    formData = {
        email: form.email.value,
        message: form.message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        formData = JSON.parse(savedMessage);
        message.value = formData.message;
        form.email.value = formData.email;
    }
}

populateTextarea();
