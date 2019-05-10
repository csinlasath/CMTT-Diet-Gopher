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
        planDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        planMeal: {
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