import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  SohojogiDayee: "",
  TalimOngshoGrohon: "",
  MoktobAdmit: "",
  QuranSikkha: "",
  
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  SohojogiDayee: Yup.number()
    .required("Sohojogi Dayee Field is required"),
  TalimOngshoGrohon: Yup.string().required("This Field is required"),
  MoktobAdmit: Yup.string().required("This Field is required"),
  QuranSikkha: Yup.string().required("This Field is required"),
  
  
  
});


