import axios from "axios";

// file used to link send request on the server side
export async function login(email, password) {
  console.log("service.js reached");

  try {
    const response = await fetch("http://localhost:3000/loginClient/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pwd: password,
      }),
    });
    const data = response;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerAsClient() {
  console.log("Client registration request");
}

export async function registerAsRestorer() {
  console.log("Restorer registration request");
}

//////////////
// Client part
export async function getRestaurantsList() {
  try {
    axios.get("http://", "parameters"); // Mettre en paramètre quels restaurants afficher
  } catch (err) {
    console.log(err);
  }
}

export async function getDishesList() {
  try {
    axios.get("http://", "parameters"); // Mettre en paramètre pour quels restaurant afficher les plats
  } catch (err) {
    console.log(err);
  }
}

export async function addToBasket() {
  console.log("");
}

export async function order() {
  console.log("");
}

////////////////
// Restorer part
export async function isOrderValidate() {
  console.log("");
}
