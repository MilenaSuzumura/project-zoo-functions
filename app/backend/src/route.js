const { Router } = require('express');
const { Hour } = require('./models');

const userRouter = Router();

userRouter.get('/', async (_req, res) => {
    const test = await Hour.findAll({ raw: true });
    console.log(test)
})

module.exports = userRouter;