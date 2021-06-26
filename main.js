
<!-- Place this script at the end of the body tag -->

<script>
    var form = document.getElementById("survey-form");

    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
    'Accept': 'application/json'
}
}).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
    status.classList.add('success');
}).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    status.classList.add('error');
});
}
    form.addEventListener("submit", handleSubmit)


<form id="survey-form" action="https://formspree.io/f/mbjqklbp" method="POST">
    <label>Email:</label>
    <input type="email" name="email" />
    <label>Message:</label>
    <input type="text" name="message" />
    /<button id="survey-form-button">Submit</button>
    <p id="survey-form-status"></p>
</form>
</script>
