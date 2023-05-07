import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputTextarea, 500));

function onInputTextarea(e) {
    const formData = {
        email: refs.form.email.value,
        message: refs.form.message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
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
