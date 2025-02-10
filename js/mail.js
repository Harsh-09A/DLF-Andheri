(function () {
  emailjs.init({
    // publicKey: "to9PlFrMMimgruuH0", //DIGIN
    publicKey: "BwX8mmKlFidsWvP67", //HARSH
  });
})();

// Get IP Address
async function getIpAddress() {
  try {
    const response = await fetch("https://api.ipify.org");
    const ip = await response.text();
    console.log(`IP: ${ip}`);
    return ip;
  } catch (error) {
    console.log(error);
    return null; // or throw error if you want to handle it differently
  }
}

// Form Submit
const handleFormSubmit = async (
  formId,
  nameField,
  emailField,
  phoneField,
  privacyField,
  dateField
) => {
  const templateParams = {
    user_name: document.getElementById(nameField).value,
    user_email: document.getElementById(emailField).value,
    contact_number: document.getElementById(phoneField).value,
    privacy_check: document.getElementById(privacyField).value,
    date: document?.getElementById(dateField)?.value,
    ip_address: await getIpAddress(),
    website_url: window.location.href,
    to_email: "harsh.autowebbed@gmail.com",
    company_name: "DLF Andheri",
  };

  // Send Form
  emailjs.send("contact_service", "contact_form", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      // alert("Message Sent Final");
      document.getElementById(formId).reset();
      if (response.status === 200) {
        window.location.href = "thank_you.html";
      }
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Message Not Sent");
    }
  );
};

window.onload = function () {
  document
    .getElementById("contact-form")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();
      handleFormSubmit(
        "contact-form",
        "user_name",
        "user_email",
        "contact_number",
        "privacy_check"
      );
    });

  document
    .getElementById("contact-form-modal")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();
      handleFormSubmit(
        "contact-form-modal",
        "user_name_modal",
        "user_email_modal",
        "contact_number_modal",
        "privacy_check_modal"
      );
    });

  document
    .getElementById("contact-form-modal-2")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();
      handleFormSubmit(
        "contact-form-modal-2",
        "user_name_modal_2",
        "user_email_modal_2",
        "contact_number_modal_2",
        "privacy_check_modal_2",
        "date_modal"
      );
    });
};
