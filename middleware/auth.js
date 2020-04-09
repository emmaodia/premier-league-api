const Admin = require('../models/admin')

module.exports.isAuthorized  = function(req, res, next) {
    const adminId = Admin.findById()
    console.log(adminId);
    // Admin.findById(req.session.adminId).exec(function (error, user) {
    //     if (error) {
    //         return next(error);
    //     } else {      
    //         if (admin === null) {     
    //             var err = new Error('Not authorized! Go back!');
    //             err.status = 400;
    //             return next(err);
    //         } else {
    //             return next();
    //         }
    //     }
    // });
}