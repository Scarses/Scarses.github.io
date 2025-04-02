// Handle click
document.addEventListener('click', (event) => {
    const container = event.target.closest('.paragraph-container-positive');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

document.addEventListener('click', (event) => {
    const container = event.target.closest('.paragraph-container-neutral');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

document.addEventListener('click', (event) => {
    const container = event.target.closest('.paragraph-container-negative');
    if (container) {
        const url = container.getAttribute('data-url');
        window.location.href = url;
    }
});

// Handle search
const files = ["../html/good_action.html", "../html/good_statut.html", "../html/neutral_action.html", "../html/neutral_statut.html", "../html/negative_action.html", "../html/negative_statut.html"];

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
            const content = li.textContent;
            const checkpoint = content.split("→").map(part => part.trim());
            if (checkpoint.length === 3) {
                const french = document.createElement("li");
                french.textContent = checkpoint[0];
                const english = document.createElement("li");
                english.textContent = checkpoint[1];
                const japanese = document.createElement("li");
                japanese.textContent = checkpoint[2];
                resultList.appendChild(french);
                resultList.insertBefore(english, french.nextSibling);
                resultList.insertBefore(japanese, english.nextSibling);
            }
        });
    } else {
        const currentLang = document.documentElement.lang;
        if (currentLang === "fr") {
            resultList.innerHTML = "<li>Aucun résultat trouvé</li>";
        }
        else if (currentLang === "en") {
            resultList.innerHTML = "<li>No result found</li>";
        }
        else {
            resultList.innerHTML = "<li>結果は見つかりませんでした</li>";
        }
    }
}   

async function changeLanguage() {
    var lang = document.getElementById("lang").value;
    window.location.href = lang;
}
