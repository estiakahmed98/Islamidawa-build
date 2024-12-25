import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  MadrasaSofor: "",
  KalemaPoreche: "",
  DawatProsikkhon: "",
  JumarMojhlish: "",
  DawatKormosala: "",
  DhormoSova: "",
  
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  MadrasaSofor: Yup.number()
    .required("This Field is required"),
  CholomanSofor: Yup.string().required("This Field is required"),
  DawatProsikkhon: Yup.string().required("Dawat Prosikkhon Field is required"),
  JumarMojhlish: Yup.string().required("This Field is required"),
  DawatKormosala: Yup.string().required("This Field is required"),
  DhormoSova: Yup.string().required("Dhormo Sova Field is required"),
  
  
  
});


