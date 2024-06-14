const db = require("../models");
const Progress = db.progress;

exports.getProgress = async (req, res) => {
    try {
        const progress = await Progress.findOne({
            where: {
                userId: req.params.id
            }
        });
        if (!progress) {
            return res.status(404).send({ message: "Progress Not Found" });
        }
        res.status(200).send(progress);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateProgress = async (req, res) => {
    try {
        const progress = await Progress.update(req.body, {
            where: {
                userId: req.params.id
            }
        });
        if (progress[0] === 0) {
            return res.status(404).send({ message: "Progress Not Found" });
        }
        res.status(200).send({ message: "Progress updated successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
