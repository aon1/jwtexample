module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  return Todo;
};