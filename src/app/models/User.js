import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      }, {
        sequelize,
      },
    );
  }
}

export default User;
