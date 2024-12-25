import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  Jamat: "",
  JamatSathi: "",
  DawatProsikkhon: "",
  jamatBerHoise: "",
  Sathi: "",
  DhormoSova: "",
  
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  Jamat: Yup.number()
    .required("Jamat Field is required"),
  JamatSathi: Yup.string().required("Jamat Sathi Field is required"),
  DawatProsikkhon: Yup.string().required("Dawat Prosikkhon Field is required"),
  jamatBerHoise: Yup.string().required("This Field is required"),
  Sathi: Yup.string().required("Sathi Field is required"),
  DhormoSova: Yup.string().required("Dhormo Sova Field is required"),
  
  
  
});


