document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('contactModal');
    const contactButtons = document.querySelectorAll('a.btn');
    const submitButton = document.querySelector('.modal__form button');
    const modalSuccessContent = document.querySelector('.modal__success-content');
    const modalFormContent = document.querySelector('.modal__form-content');
    const closeSuccessButton = document.querySelector('.js-close-success');

    contactButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');

            modalFormContent.style.display = 'block';
            modalSuccessContent.style.display = 'none';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    if (submitButton) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Form submitted');
            
            modalFormContent.style.display = 'none';
            modalSuccessContent.style.display = 'block';
        });
    }

    if (closeSuccessButton) {
        closeSuccessButton.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
        });
    }
});
