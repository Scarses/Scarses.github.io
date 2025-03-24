// Handle click
document.addEventListener('click', (event) => {
    const container = event.target.closest('.accueil-button');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

document.addEventListener('click', (event) => {
    const container = event.target.closest('.repertory-button');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});
