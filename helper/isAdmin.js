const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(200).send({
          success: false,
          message: "UnAuthorised Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        message: "Error in Admin Middleware",
        error,
      });
    }
  };

  module.exports = isAdmin;