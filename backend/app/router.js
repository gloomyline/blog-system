'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
        .get('/users', controller.home.getUsers)
        .post('/user', controller.home.postUser)
};
