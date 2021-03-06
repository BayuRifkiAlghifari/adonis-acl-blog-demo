'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to bash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasPermission',
      '@provider:Adonis/Acl/HasRole'
    ]
  }
}

module.exports = User
