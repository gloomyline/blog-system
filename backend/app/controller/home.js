'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async getUsers () {
    const users = await this.ctx.model.User
      .find({}).catch(err => this.ctx.throw(500, 'Server Internal Error!'))
    if (users) {
      this.ctx.body = {
        code: 0,
        message: 'Fetch users successfully :)',
        result: users
      }
    } 
  }

  async postUser () {
    const {
      username,
      password,
      priority,
      infos
    } = this.ctx.request.body

    // avoid to add user whose username has been used
    const users = await this.ctx.model.User
      .findOne({ username }).catch(err => this.ctx.throw(500, 'Server Internal Error!'))
    if (users && users.length > 0) {
      this.ctx.body = {
        code: 1,
        message: 'The username has already existed :('
      }
      return false
    }

    const User = this.ctx.model.User
    const user = await new User({
      username,
      password,
      priority,
      infos
    }).save().catch(err => this.ctx.throw(500, 'Server Internal Error :('))
    if (user) {
      this.ctx.body = {
        code: 0,
        message: 'Add a new user',
        result: user
      }
    } else {
      this.ctx.body = {
        code: 1,
        message: 'Fail to add a new user :('
      }
    }
  }
}

module.exports = HomeController;
