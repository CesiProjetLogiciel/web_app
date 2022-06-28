const axios = require("axios");

const API_URL = process.env.GATEWAY_API_URL;
const API_KEY = process.env.WEB_API_KEY;

async function apiTokenRefresh() {
    let response = await axios.post(`${API_URL}/api/oauth/token`,
        {
            headers: { Authorization: `Bearer ${API_KEY}`},
            data: {
                grant_type: "refresh_token",
                refresh_token: "TODO",
            }
        }
    );
    if (response.status == 401) {
        throw "LOGIN";
    }
    else if (response.status == 403) {
        return response;
    }
    else {
        return true;
    }
}

async function apiCall(req, method, route, bearerToken, body = null) {
    if (bearerToken === undefined) {
        throw "LOGIN";
    }
    // Adds a leading slash if missing
    if (Array.from(route)[0] != "/") {
        route = "/" + route;
    }
    var request = {
        method: method,
        url: `${API_URL}/api${route}`,
        headers: { Authorization: `Bearer ${bearerToken}` }
    }
    if (["post", "put"].includes(method) && body != null) {
        request.data = body;
    }
    var response = await axios(request);
    if (response.status == 401) {
        let refreshResponse = await apiTokenRefresh();
        if (refreshResponse === true) {

            // store user information in session
            req.session.access_token = refreshResponse.data.access_token
            req.session.refresh_token = refreshResponse.data.refresh_token

            req.session.save(function (err) {
                if (err) return next(err)
            })

            response = await axios(request);
        }
        return refreshResponse;
    }
    return response;
}

const apiCallRegister = async function (req, email, password, user_type, first_name, last_name, referral_code = null) {
    var body = {
        email: email,
        password: password,
        user_type: user_type,
        first_name: first_name,
        last_name: last_name
    }
    if (referral_code != null) {
        body.referral_code = referral_code;
    }
    let response = await apiCall(req, "post", "/oauth/register", API_KEY, body);
    return response;
}

const apiCallLogin = async function (req, email, password) {
    var body =  {
        grant_type: "client_credentials",
        email: email,
        password: password
    }
    let response = await apiCall(req, "post", "/oauth/token", API_KEY, body);
    return response;
}

const apiCallGet = async function (req, route) {
    let response = await apiCall(req, "get", route, req.session.access_token);
    return response;
}

const apiCallPost = async function (req, route, body) {
    console.log("POST")
    console.log(req.session)
    let response = await apiCall(req, "post", route, req.session.access_token, body);
    return response;
}

const apiCallPut = async function (req, route, body) {
    let response = await apiCall(req, "put", route, req.session.access_token, body);
    return response;
}

const apiCallDelete = async function (req, route) {
    let response = await apiCall(req, "delete", route, req.session.access_token);
    return response;
}

module.exports = {
    apiCallRegister,
    apiCallLogin,
    apiCallGet,
    apiCallPost,
    apiCallPut,
    apiCallDelete
  };