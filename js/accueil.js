// Handle click
document.addEventListener('click', (event) => {
    const container = event.target.closest('.paragraph-container-find-word');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

document.addEventListener('click', (event) => {
    const container = event.target.closest('.paragraph-container-for-more');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

// Handle search
const files = ["../html/list1.html", "../html/list2.html", "../html/list3.html", "../html/list4.html", "../html/list5.html", "../html/list6.html"];

async function search() {
    let query = document.getElementById('search-bar').value.toLowerCase();
    let resultList = document.getElementById('resultList');
    resultList.innerHTML = "";

    if (query.trim() === "") return;

    let allResults = [];

    for (let file of files) {
        try {
            let response = await fetch(file);
            let text = await response.text();
            let lines = text.split("\n");

            let matches = lines.filter(line => line.toLowerCase().includes(query));

            allResults.push(...matches.map(match => ({ file, text: match })));
        } catch (error) {
            console.error('Error ${file}:', error);
        }
    }

    if (allResults.length > 0 && allResults.length < 2) {
        allResults.forEach(result => {
            let li = document.createElement("li");
            li.innerHTML = `${result.text}`;
            resultList.appendChild(li); 
        });
    } else {
        const currentLang = document.documentElement.lang;
        resultList.innerHTML = currentLang === "fr"
        ? "<li>Aucun résultat trouvé</li>"
        : "<li>No result found</li>";
    }
}   

async function changeLanguage() {
    var lang = document.getElementById("lang").value;
    window.location.href = lang;
}
