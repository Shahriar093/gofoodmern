const {newUserJoi, oldUserJoi } = require("./JoiSchema")

module.exports.validenewUser = (req, res, next) => {
    let reslt = newUserJoi.validate(req.body);
    if (reslt.error) {
        return res.send(reslt.error.message);
    }
    next();
}
module.exports.valideoldUser = (req, res, next) => {
    let reslt = oldUserJoi.validate(req.body);
    if (reslt.error) {
        return res.send(reslt.error.message);
    }
    next();
}