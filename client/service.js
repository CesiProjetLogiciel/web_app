// file gonna be use to link send request on the server side

export function writeLogs(msg) {
  console.log(msg);
}

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



/* if (!response.ok) {
    throw new Error(`error-> ${response.status}`);
}
const data = await response.json(); */