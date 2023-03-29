function sendMail(contactForm) {

    var templateParams = {
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        project_request: contactForm.projectsummary.value
    }

    emailjs.send("service_zt9gr84", "resume", templateParams)
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
