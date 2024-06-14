module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Course;
};


// INSERT INTO courses (title, description, createdAt, updatedAt)  VALUES ('Python 101', 'Introduction to Python', NOW(), NOW());
