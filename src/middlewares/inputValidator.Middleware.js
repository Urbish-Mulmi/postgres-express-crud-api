// joi based  Validation middleware is used to separate validation responsibility from the controller and reject invalid requests early
import Joi from "joi";

const userSchema = Joi.object({
  name:Joi.string().min(3).required(),
  
   email: Joi.string().email().lowercase().required(),
});

export const validateUser = (req,res,next)=>{
  const { error, value } = userSchema.validate(req.body);

  if(error) return res.status(400).json({
    status:400,
    message:error.details[0].message
  });
  req.body = value;
  next();
}

// Add validation for query params limit and offset, enforcing them to be number data type.Throw 400 user error if deliberately string value is passed
const paginationSchema = Joi.object({
  limitValue:Joi.number().integer().min(1).max(20).default(5),
  offsetValue:Joi.number().integer().min(0).default(0),
})

export const validatePagination = (req,res,next)=>{
  const {error, value} = paginationSchema.validate(req.query)
   if(error) return res.status(400).json({
    status:400,
    message:error.details[0].message
  });
  Object.assign(req.query, value);
  next();
}

// Add validation for path parameter id:
const  pathValidation = Joi.object({
  id:Joi.number().integer().min(1).max(100).required()
})
export const validatePath = (req,res,next) =>{
  const {error,value} = pathValidation.validate(req.params)
  if(error) return res.status(400).json({
    status:400,
    message:error.details[0].message
  });
  Object.assign(req.params, value);
  next();
}