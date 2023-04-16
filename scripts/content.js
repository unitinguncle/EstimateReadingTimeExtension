const article = document.querySelector("article");
if(article) {
    const text = article.textContent;
    const wordRegex = /[^\s]+/g;
    const words = text.matchAll(wordRegex);
    
    const wordCount = [...words].length;
    const readTime = Math.round(wordCount/200);
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text","type--caption");
    badge.textContent = `⏱️ ${readTime} minutes of read.`;

    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentnode;
    (date??heading).insertAdjacentElement("afterend",badge);
}