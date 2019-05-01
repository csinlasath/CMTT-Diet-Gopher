module.exports = (sequelize, DataTypes) => {
    const favorited = sequelize.define("favorited", {
        itemID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return favorited;
};