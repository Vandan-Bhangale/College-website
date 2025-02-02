let content = document.querySelector(".content");
let more = document.querySelector(".more");

function loadContent(cardNumber) {
    document.querySelectorAll("body > *:not(.content)").forEach(el => el.style.display = "none");
    content.innerHTML = cardDetail[cardNumber] || "<p>Content not found</p>";
}

more.addEventListener("click",() => {
    console.log("learn more button is clicked")
    loadContent(1);
})

