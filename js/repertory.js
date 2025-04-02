// Handle click
document.addEventListener('click', (event) => {
    const container = event.target.closest('.accueil-page');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

document.addEventListener('click', (event) => {
    const container = event.target.closest('.information-page');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

// Handle list
fetch('../html/good_action.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container-list-good-action').innerHTML = data;
        attachSearchFunctionality();
});

fetch('../html/good_statut.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container-list-good-statut').innerHTML = data;
        attachSearchFunctionality();
});

fetch('../html/neutral_action.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container-list-neutral-action').innerHTML = data;
        attachSearchFunctionality();
});

fetch('../html/neutral_statut.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container-list-neutral-statut').innerHTML = data;
        attachSearchFunctionality();
});

fetch('../html/negative_action.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container-list-negative-action').innerHTML = data;
        attachSearchFunctionality();
});

fetch('../html/negative_statut.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container-list-negative-statut').innerHTML = data;
        attachSearchFunctionality();
});

async function changeLanguage() {
    var lang = document.getElementById("lang").value;
    window.location.href = lang;
}
