import React from "react";
import * as yup from "yup";
const Validation = () => {
  const validationSchema = yup.object().shape({
    Email: yup
      .string()
      .required("Required!")
      .email("Not a valid E-mail")
      .min(4)
      .trim(),
    Password: yup
      .string()
      .required("Required!")

      .min(6, "Minimum 6 charaters are required"),
  });
};
export default Validation;
