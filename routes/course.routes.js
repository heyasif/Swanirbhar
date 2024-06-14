/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: APIs for managing courses
 */

const {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/course.controller.js");

const { verifyToken, isTeacher } = require("../middleware/auth.middleware.js");

module.exports = app => {
    /**
     * @swagger
     * /courses:
     *   get:
     *     summary: Retrieve all courses
     *     tags: [Courses]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Successfully retrieved courses
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Course'
     *       500:
     *         description: Internal server error
     */
    app.get("/courses", verifyToken, getAllCourses);

    /**
     * @swagger
     * /courses/{id}:
     *   get:
     *     summary: Retrieve details of a specific course
     *     tags: [Courses]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Successfully retrieved course details
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Course'
     *       404:
     *         description: Course Not Found
     *       500:
     *         description: Internal server error
     */
    app.get("/courses/:id", verifyToken, getCourseById);

    /**
     * @swagger
     * /courses:
     *   post:
     *     summary: Create a new course
     *     tags: [Courses]
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               title:
     *                 type: string
     *               description:
     *                 type: string
     *     responses:
     *       201:
     *         description: Course created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Course'
     *       500:
     *         description: Internal server error
     */
    app.post("/courses", [verifyToken, isTeacher], createCourse);

    /**
     * @swagger
     * /courses/{id}:
     *   put:
     *     summary: Update a course
     *     tags: [Courses]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               title:
     *                 type: string
     *               description:
     *                 type: string
     *     responses:
     *       200:
     *         description: Course updated successfully
     *       404:
     *         description: Course Not Found
     *       500:
     *         description: Internal server error
     */
    app.put("/courses/:id", [verifyToken, isTeacher], updateCourse);

    /**
     * @swagger
     * /courses/{id}:
     *   delete:
     *     summary: Delete a course
     *     tags: [Courses]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Course deleted successfully
     *       404:
     *         description: Course Not Found
     *       500:
     *         description: Internal server error
     */
    app.delete("/courses/:id", [verifyToken, isTeacher], deleteCourse);
};
