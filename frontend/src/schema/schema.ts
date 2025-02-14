import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("*"),
  password: yup.string().required("*").min(8, "Password is too short."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match.")
    .required("*"),
  emailAddress: yup.string().email("Must be a valid emailaddress.").required("*"),
  provider: yup.string().required("*"),
  username: yup.string().required("*").min(4, "Username must be atleast 4 characters."),
});

export const signInSchema = yup.object().shape({
  usernameOrEmail: yup.string().required("*"),
  password: yup.string().required("*"),
});
