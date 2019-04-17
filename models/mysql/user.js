module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      photoURL: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
    });
    
    return user;
  };