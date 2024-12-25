import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  DawatMojlish: "",
  DawatGurutto: "",
  DawatProsikkhon: "",
  DawatKormosala: "",
  JumarMojlish: "",
  DhormoSova: "",
  
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  DawatMojlish: Yup.number()
    .required("Dawat Mojlish Field is required"),
  DawatGurutto: Yup.string().required("Dawat Gurutto Field is required"),
  DawatProsikkhon: Yup.string().required("Dawat Prosikkhon Field is required"),
  DawatKormosala: Yup.string().required("Dawat Kormosala Field is required"),
  JumarMojlish: Yup.string().required("Jumar Mojlish Field is required"),
  DhormoSova: Yup.string().required("Dhormo Sova Field is required"),
  
  
  
});


