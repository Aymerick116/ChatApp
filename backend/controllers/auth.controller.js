

export const login = (req,res) =>{
    try{
        const {fullName,username,password,confirmPassword,gender} = req.body;
    }
    catch(error){

    }

};

export const signup = (req,res) =>{
    console.log("signupUser");
}

export const logout = (req,res) =>{
    console.log("logoutUser");
}