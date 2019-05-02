module.exports = (sequelize, DataTypes) => {
    const favorited = sequelize.define("favorited", {
        itemId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        restaurantChain: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return favorited;
};