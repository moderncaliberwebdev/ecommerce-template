// Imports
import asyncHandler from 'express-async-handler'
import {Request, Response} from 'express'
import User from '../models/userModel'
import mongoose from 'mongoose';


export const isUser = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id
    const { email, email_verified} = req.query

    let socialUser = false;
    
    if (id.length < 24) {
        socialUser = true
    }
    
    if (!socialUser) {
        const user = await User.findById(mongoose.Types.ObjectId(id))
        res.json(user)
        console.log(user);
        
    } 
    else {
        console.log('social user');
        
        User.countDocuments({ _id: `${id}123` }, function (err, count) {
            if(count < 1) {
                console.log('user non existant');
            
                const newUser = User.create({ email, email_verified, isAdmin: false, orders: [], _id: `${id}123`})
                res.json(newUser)
            } else {
                console.log(`${id}123`);
            
                console.log('user exists');
                
                res.json({
                    _id: id,
                    email,
                    email_verified
                })
            }
        })
        
    }
    
}) 


//find user using user id, if there is a user, return user
// if there is no user, create a user using the user object provided by auth0