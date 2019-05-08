module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("comment", {
        itemId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return comment;
};