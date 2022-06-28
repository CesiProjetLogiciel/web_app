const axios = require("axios");
axios.defaults.withCredentials = true;

// file used to link send request on the server side
export async function login(email, password) {
  console.log("service.js reached");

  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerAsClient(email, password, firstName, lastName, referralCode = null) {
  console.log("Client registration request");
  try {
    var body = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      user_type: "Client"
    }
    if (referralCode != null) {
      body.referral_code = referralCode;
    }
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/register",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: body
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerAsRestorer(
  email,
  password,
  firstName,
  lastName,
  restaurantName,
  category,
  address,
  zipcode,
  country,
  city,
  phoneNumber,
  state = null,
  referral_code = null) {
    try {
      var body = {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        user_type: "Restaurant"
      }
      if (referral_code != null) {
        body.referral_code = referral_code;
      }
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/register",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: body
      });

      if (response.status == 201) {
        var bodyAddress = {
          zipcode: zipcode,
          address: address,
          city: city,
          country: country,
          last_name: lastName,
          first_name: firstName,
          phone_number: phoneNumber
        }
        if (state != null) {
          bodyAddress.state = state;
        }
        await axios({
          method: "post",
          url: "http://localhost:5000/addresses",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: bodyAddress
        });

        await axios({
          method: "post",
          url: "http://localhost:5000/restaurants",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: {
            name: restaurantName,
            category: category
          }
        });
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
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
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

export async function order(userId, deliveryAddress, restaurantId, productsId, menuIds, price, token) {
  try {
    const response = await axios.post(distAddress + '/clientorder/', {
      data: {
        user_id: userId,
        delivery_address: deliveryAddress,
        restaurant_id: restaurantId,
        product_ids: productsId,
        menu_ids: menuIds,
        price: price,
        payment_token: token,
      },
    })
    console.log(response)
    return response.data;
  } catch (e) {
    console.log(e)
  }
  return;
}

////////////////
// Restorer part
export async function modifyDish(restaurantId, dishId, newName, newPrice) {
  try {
    const modifyDish = await axios.put(distAddress + '/modify/', {
      data: {
        id: restaurantId,
        idToModify: dishId,
        name: newName,
        price: newPrice,
      }
    })
    const datas = modifyDish.data;
    return datas;
  } catch (err) {
    console.log(err);
  }
  return;
}

export async function addDish(restaurantId, dishName, dishDescription, dishPrice, dishImage) {
  try {
    const response = await axios.post(distAddress + '/add/', {
      data: {
        id: restaurantId,
        dishName: dishName,
        dishDescription: dishDescription,
        dishPrice: dishPrice,
        dishPicture: dishImage
      },
    })
    return response.data;
  } catch (e) {
    console.log(e)
  }
  return;
}

export async function getOrders() {
  try {
    const response = await axios.get(distAddress + '/orders/')
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function modifyEmail(userId, newMail) {
  try {
    const response = await axios.put(distAddress + '/modifyemail/', {
      data: {
        id: userId,
        email: newMail,
      }
    })
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function modifyPassword(userId, newPwd) {
  try {
    const response = await axios.put(distAddress + '/modifypwd/', {
      data: {
        id: userId,
        password: newPwd,
      }
    })
    return response;
  } catch (e) {
    console.log(e);
  }
}