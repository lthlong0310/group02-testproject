var express = require('express');
var controller = require("../../controllers/admin/order-list");
var authentication = require("../../config/authentication");

var router = express.Router();

/* GET order-list page. */
router.get('/', authentication.ensureAuthenticatedAdmin, controller.index);

module.exports = router;