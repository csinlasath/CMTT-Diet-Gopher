module.exports = (sequelize, DataTypes) => {
    const plan = sequelize.define("plan", {
        itemId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meal: {
            type: DataTypes.STRING,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });
    return plan;
};