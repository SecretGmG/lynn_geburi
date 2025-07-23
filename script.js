document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const correctNumber = 2571;
    const enteredNumber = document.querySelector("input[type=number]").value;

    if (parseInt(enteredNumber) === correctNumber) {
        window.location.href = "win.html";
    } else {
        alert("Schade, das isch die falsch nummere gsi :(");
    }
});
