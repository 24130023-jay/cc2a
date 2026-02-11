document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formResult").innerText =
        "Thank you, " + name + "! We will contact you soon.";

    this.reset();
});
