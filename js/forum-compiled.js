const scriptURL = 'https://script.google.com/macros/s/AKfycbyjX3wOH3iuOl4w2UHuMnQLCpoaTIIO9rVS7A3WM7GQqDwFItDc4mPcDOksomeBmsj9EA/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
});