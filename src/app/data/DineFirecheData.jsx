import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  Omuslim: "",
  KalemaPoreche: "",
  DawatProsikkhon: "",
  Murtad: "",
  IslamEFireche: "",
  DhormoSova: "",
  
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  Omuslim: Yup.number()
    .required("This Field is required"),
  KalemaPoreche: Yup.string().required("This Field is required"),
  DawatProsikkhon: Yup.string().required("Dawat Prosikkhon Field is required"),
  Murtad: Yup.string().required("This Field is required"),
  IslamEFireche: Yup.string().required("This Field is required"),
  DhormoSova: Yup.string().required("Dhormo Sova Field is required"),
  
  
  
});


