class Response {
    static success(res, message, data = {}) {
        res.status(200).json({ success: true, message, data });
    }

    static error(res, message, error = {}) {
        res.status(400).json({ success: false, message, error });
    }
}

module.exports = Response;
