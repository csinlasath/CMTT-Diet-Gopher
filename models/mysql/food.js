module.exports = (sequelize, DataTypes) => {
    const food = sequelize.define("food", {
        itemId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        meal: {
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
    });

    return food;
};