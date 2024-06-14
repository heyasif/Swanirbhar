module.exports = (sequelize, Sequelize) => {
    const Progress = sequelize.define("progress", {
        progress: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false  
    });

    return Progress;
};


//INSERT INTO progresses (progress, userId, courseId, createdAt, updatedAt) 
//VALUES (50, 1, 1, NOW(), NOW());