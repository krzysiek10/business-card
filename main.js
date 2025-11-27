document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('contactModal');
    const contactButtons = document.querySelectorAll('a.btn');
    const submitButton = document.querySelector('.modal__form button');

    contactButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
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
            modal.classList.remove('active');
        });
    }
});
