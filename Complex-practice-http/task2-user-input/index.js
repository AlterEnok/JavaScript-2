const form = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');

form.addEventListener('submit', async(event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    const formData = Object.fromEntries(new FormData(form));

    try {
        const response = await fetch('https://www.mockapi.io/your-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        alert(JSON.stringify(result));

        form.reset();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
});

form.addEventListener('input', () => {
    if (form.reportValidity()) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
});