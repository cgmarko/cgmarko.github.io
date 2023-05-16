function deleteUser(event) {
  event.preventDefault();

  let userId = event.currentTarget.dataset.userId;

  fetch(`https://pra-api.onrender.com/lecturer/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then((response) => {
      if (response.ok) {
        createModalDialog("Successfully deleted", true);
      } else {
        createModalDialog(response.text());
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      createModalDialog("An error occurred. Please try again later.");
    });
}
