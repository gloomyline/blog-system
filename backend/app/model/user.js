/*
* @Author: AlanWang
* @Date:   2018-04-03 15:02:10
* @Last Modified by:   AlanWang
* @Last Modified time: 2018-04-03 15:15:51
*/

module.exports = app => {
  const mongoose = app.mongoose
  const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, validate: /\S+/ },
    password: { type: String, default: '123456', validate: /\S+/ },
    // 0 => primary, 1 => admin, 2 => superAdmin
    priority: { type: Number, default: 0 },
    infos: {
      nickname: { type: String, default: 'visitor' },
      // 0 => male, 1 => female
      gender: { type: Number, default: 0 },
      age: { type: Number, default: 26 }
    }
  })

  return mongoose.model('User', UserSchema)
}