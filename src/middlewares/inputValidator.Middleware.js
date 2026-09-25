// joi based  Validation middleware is used to separate validation responsibility from the controller and reject invalid requests early
import Joi from "joi";

const userSchema = Joi.object({
  name:Joi.string().min(3).required(),
  
   email: Joi.string().email().lowercase().required(),
});

const validateUser = (req,res,next)=>{
  const { error, value } = userSchema.validate(req.body);

  if(error) return res.status(400).json({
    status:400,
    message:error.details[0].message
  });
  req.body = value;
  next();
}
export default validateUser;