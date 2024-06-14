/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication APIs
 */

const { register, login } = require("../controllers/auth.controller.js");

module.exports = app => {
    /**
     * @swagger
     * /register:
     *   post:
     *     summary: Register a new user
     *     tags: [Authentication]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                 type: string
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *               role:
     *                 type: string
     *     responses:
     *       200:
     *         description: User registered successfully
     *       500:
     *         description: Internal server error
     */
    app.post("/register", register);

    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Authenticate user and generate token
     *     tags: [Authentication]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *     responses:
     *       200:
     *         description: Login successful
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                 username:
     *                   type: string
     *                 email:
     *                   type: string
     *                 role:
     *                   type: string
     *                 accessToken:
     *                   type: string
     *       401:
     *         description: Invalid credentials
     *       500:
     *         description: Internal server error
     */
    app.post("/login", login);
};
