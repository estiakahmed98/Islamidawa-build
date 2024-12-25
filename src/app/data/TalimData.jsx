import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  mohilaTalim: "",
  TalimOngshoGrohon: "",
  MoktobAdmit: "",
  QuranSikkha: "",
  
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  mohilaTalim: Yup.number()
    .required("This Field is required"),
  TalimOngshoGrohon: Yup.string().required("This Field is required"),
  MoktobAdmit: Yup.string().required("This Field is required"),
  QuranSikkha: Yup.string().required("This Field is required"),
  
  
  
});


