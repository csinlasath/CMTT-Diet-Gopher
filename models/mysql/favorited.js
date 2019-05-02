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
        }
    });
    return favorited;
};