// file used to link send request on the server side
export async function login(email, password) {
    console.log("service.js reached");

    try {
        const response = await fetch("http://localhost:3000/loginClient/",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "pwd": password,
            })
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

