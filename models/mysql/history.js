module.exports = (sequelize, DataTypes) => {
    const history = sequelize.define("history", {
        itemId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        restaurantChain: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return history;
};