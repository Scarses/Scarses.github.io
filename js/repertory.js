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
fetch('list1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container1-list').innerHTML = data;
        attachSearchFunctionality();
});

fetch('list2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container2-list').innerHTML = data;
        attachSearchFunctionality();
});

fetch('list3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container3-list').innerHTML = data;
        attachSearchFunctionality();
});

fetch('list4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container4-list').innerHTML = data;
        attachSearchFunctionality();
});

fetch('list5.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container5-list').innerHTML = data;
        attachSearchFunctionality();
});

fetch('list6.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container6-list').innerHTML = data;
        attachSearchFunctionality();
});
