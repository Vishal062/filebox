import * as Z from "zod";

export const signUpSchema = Z.object({
  email: Z.string().min(1, {message: 'Email is required'})
  .email({message: 'Invalid email address'}),
  password: Z.string().min(1, {message: 'Password must be at least 8 characters long'}),
  passwordConfirmation: Z.string().min(1, {message: 'Password confirmation is required'}),
})
.refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"],
});

