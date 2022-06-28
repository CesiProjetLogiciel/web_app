const { apiCallRegister, apiCallLogin } = require("./gateway_api");

require("./gateway_api");

const postRegister = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await apiCallRegister(
            req,
            body.email,
            body.password,
            body.user_type,
            body.first_name,
            body.last_name,
            body.referral_code ? body.referral_code : null
        );
        if (response.status != 201) {
            return res.status(response.status).send(response.data);
        }
        else {
            // regenerate the session, which is good practice to help
            // guard against forms of session fixation
            req.session.regenerate(function (err) {
                if (err) next(err)

                // store user information in session
                req.session.user_id = response.data.user_id
                req.session.user_type = response.data.user_type
                req.session.access_token = response.data.access_token
                req.session.refresh_token = response.data.refresh_token

                // save the session before redirection to ensure page
                // load does not happen before session is saved
                req.session.save(function (err) {
                    console.log("save session")
                    if (err) {
                        console.log("save error")
                        console.log(err)
                        return next(err)
                    }
                    return res.status(201).send({user_id: req.session.user_id, user_type: req.session.user_type});
                })
            })
        }
    } catch(e) {
        return res.status(500).send(e.message);
    }
  };
  
  const postLogin = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await apiCallLogin(req, body.email, body.password);
        if (response.status != 200) {
            return res.status(response.status).send(response.data);
        }
        else {
            // regenerate the session, which is good practice to help
            // guard against forms of session fixation
            req.session.regenerate(function (err) {
                if (err) next(err)

                // store user information in session
                req.session.user_id = response.data.user_id
                req.session.user_type = response.data.user_type
                req.session.access_token = response.data.access_token
                req.session.refresh_token = response.data.refresh_token

                // save the session before redirection to ensure page
                // load does not happen before session is saved
                req.session.save(function (err) {
                    if (err) return next(err)
                    res.send({user_id: req.session.user_id, user_type: req.session.user_type});
                })
            })
        }
    } catch(e) {
        return res.status(500).send(e.message);
    }
  };
  
  module.exports = {
    postRegister,
    postLogin,
  };