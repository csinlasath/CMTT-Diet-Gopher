module.exports = (sequelize, DataTypes) => {
    const food = sequelize.define("food", {
        foodName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foodType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foodIngredients: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foodCalories: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        foodFat: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        foodProtein: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        foodGluten: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        foodVeggie: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        foodVegan: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        foodNuts: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        foodIngredients: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foodEatenDate: {
            type: DataTypes.STRING,
            allowNull: true
        },
        calRange: {
            type: DataType.STRING,
            allowNull: true
        },
        proRange: {
            type: DataTypes.STRING,
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return food;
};