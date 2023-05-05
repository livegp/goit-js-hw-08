import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputTextarea, 500));

function onInputTextarea(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    
    //send form data
    console.log({
        email: refs.form.email.value,
        message: refs.form.message.value,
    });

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);
        refs.message.value = parsedMessage.message;
        refs.form.email.value = parsedMessage.email;
    }
}

populateTextarea();
