//your JS code here. If required.
function handleSubmit(event) {
      event.preventDefault(); // stop page reload

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;

      alert(
        "First Name: " + firstName +
        " Last Name: " + lastName +
        " Phone Number: " + phone +
        " Email ID: " + email
      );
    }