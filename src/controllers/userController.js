import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, UpdateUserService } from "../models/userModel.js";

// Standardized response function that will be reused throughtout different api specific mapped controller functions
const handleResponse = (res, status, message, data = null)=>{
  res.status(status).json({
    status,message,data,
  });
};



// Homepage
export const homepageInfo = (req, res, next) => {
  try {
    res.status(200).json({
      message: "Welcome to the PostgreSQL CRUD API, created on 2026 sep 25",
      version: "Iteration 1",
      resource: "/api/users",
      operations: [
        "GET all users",        "GET user by ID",        "POST create user",        "PUT update user",        "DELETE user"
      ],
      ToolsForInteracting: " Postman, Bruno, Thunder Client"
    });
  } catch (err) {
    next(err);
  }
};



export const createUser = async (req,res,next)=>{
  const {name, email} = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res,201, "User Created Successfully", newUser);    
  } catch (err) {
    next(err);
    }  
}

export const getAllUsers = async (req,res,next)=>{
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "All Users Fetched Successfully", users);    
  } catch (err) {
    next(err);
    }  
}

export const getUserById = async (req,res,next)=>{
  
  try {
    const user = await getUserByIdService(req.params.id);
    if(!user) return handleResponse(res, 404, "User not found");
    handleResponse(res,200, "Id specific User fetched Successfully", user);    
  } catch (err) {
    next(err);
    }  
}

export const updateUserById = async (req,res,next)=>{
    
 const {id} = req.params;
  const {name,email} = req.body;
 
  try {
    const updatedUser = await UpdateUserService(id,name,email);    
    if(!updatedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res,200, "Id specific User updated Successfully", updatedUser);    
  } catch (err) {
    next(err);
    }  
}

export const deleteUserById = async (req,res,next)=>{
    
 const {id} = req.params;
  try {
    const deletedUser = await deleteUserService(id);    
    if(!deletedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res,200, "Id specific User deleted Successfully", deletedUser);    
  } catch (err) {
    next(err);
    }  
}