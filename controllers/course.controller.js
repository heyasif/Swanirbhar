const db = require("../models");
const Course = db.courses;

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) {
            return res.status(404).send({ message: "Course Not Found" });
        }
        res.status(200).send(course);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create({
            title: req.body.title,
            description: req.body.description
        });
        res.status(201).send(course);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.update(req.body, {
            where: { id: req.params.id }
        });
        if (course[0] === 0) {
            return res.status(404).send({ message: "Course Not Found" });
        }
        res.status(200).send({ message: "Course updated successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.destroy({
            where: { id: req.params.id }
        });
        if (!course) {
            return res.status(404).send({ message: "Course Not Found" });
        }
        res.status(200).send({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
