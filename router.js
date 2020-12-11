const Router = require('express');
const {check} = require('express-validator');
const controller = require('./controller');
const roleMiddleware = require('./middlewaree/roleMiddleware');
const router = new Router();

router.post('/registration',[
    check('username', 'Поле username должно содержать не менее 2 символов')
        .notEmpty({ ignore_whitespace: true })
        .isLength({min: 2}),
    check('password', 'Поле password не может быть меньше 4 символов')
        .isLength({min: 4}),
], controller.registration);

router.post('/login', [], controller.login);

router.get('/users', [roleMiddleware(['ADMIN'])], controller.getUsers);

module.exports = router;