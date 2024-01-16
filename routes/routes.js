const {Router } = require('express');
const router = Router();
const authController=require('../controllers/authController')

router.put('/login',authController.login)

module.exports = router;