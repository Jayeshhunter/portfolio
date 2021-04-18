const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // passwordError.textContent = '';

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  console.log(name, email, message);
  form.name.value = "";
  form.email.value = "";
  form.message.value = "";

  try {
    const res = await fetch(
      "https://enigmatic-caverns-13150.herokuapp.com/mail",
      {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    console.log("here", data);
    if (data.error) {
      alert("Invalid Details");
    }
    if (data.success) {
      alert("Thank you! Please check your mail for my quote");
    }
    //   if (data.user) {
    //     location.assign("/loeUser/" + hid);
    //     // changew this later to new page
    //   }
  } catch (err) {
    console.log(err);
  }
});
