// global error handler

const globalErrorHandler = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => {
            console.error("Global Error Handler:", err);

            return res.status(500).json({
                success: false,
                message: "Something went wrong, Please try again",
            });
        });
    };
};

module.exports = {
    globalErrorHandler,
};
