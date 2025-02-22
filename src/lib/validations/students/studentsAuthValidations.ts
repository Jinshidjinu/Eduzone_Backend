import joi from 'joi'
const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const passswordError = new Error(
  "Password must be strong. At least one alphabet. At least one digit. At least one special character. Minimum eight in length"
);
const confirmPasswordError = new Error("confirmPassword must be same password");

export const studentRegisterSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    phone:joi.string().required(),
    password: joi.string().regex(passwordRegx).error(passswordError).required(),
    confirmpassword: joi.string()
      .valid(joi.ref("password"))
      .error(confirmPasswordError)
      .required(),
    qualification: joi.string().required(),
    subject:joi.string().required()  
})

export const studentLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});