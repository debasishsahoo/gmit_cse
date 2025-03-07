const userModel=require('../models/user.model')



const userServices={
    INSERT:async (userPayload)=>{
        const { email } = userPayload;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    return await userModel.create(userPayload);
    },
    VIEW_ALL:async()=>{},
    VIEW_SINGLE:async()=>{},
    UPDATE:async()=>{},
    DELETE:async()=>{},
}

module.exports = userServices