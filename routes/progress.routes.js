/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: APIs for tracking user progress
 */

const {
    getProgress,
    updateProgress
} = require("../controllers/progress.controller.js");

const { verifyToken } = require("../middleware/auth.middleware.js");

module.exports = app => {
    /**
     * @swagger
     * /users/{id}/progress:
     *   get:
     *     summary: Retrieve progress for a user
     *     tags: [Progress]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Successfully retrieved progress
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Progress'
     *       404:
     *         description: Progress Not Found
     *       500:
     *         description: Internal server error
     */
    app.get("/users/:id/progress", verifyToken, getProgress);

    /**
     * @swagger
     * /users/{id}/progress:
     *   post:
     *     summary: Update progress for a user
     *     tags: [Progress]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               progress:
     *                 type: integer
     *     responses:
     *       200:
     *         description: Progress updated successfully
     *       404:
     *         description: Progress Not Found
     *       500:
     *         description: Internal server error
     */
    app.post("/users/:id/progress", verifyToken, updateProgress);
};
