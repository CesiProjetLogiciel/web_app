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

const distAddress = "http://localhost:5000";

export async function getRestaurantsList() {
  try {
    const restaurantsList = await axios.get(distAddress + '/restaurants/'); // Mettre en paramètre quels restaurants afficher
    const datas = restaurantsList.data.data;
    return datas;
  } catch (err) {
    console.log(err);
  }
  return;
}

export async function getDishesList(restaurantId) {
  try {
    const dishesList = await axios.get(distAddress + '/dishes/', {
      params: {
        id: restaurantId
      }
    }) // Mettre en paramètre quels restaurants afficher
    const datas = dishesList.data.data;
    return datas;
  } catch (err) {
    console.log(err);
  }
  return;
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
