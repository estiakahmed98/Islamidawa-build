import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  MoktobChalu: "",
  MoktobAdmit: "",
  NewMoktob: "",
  Sikkha: "",
  TotalStudent: "",
  TotalSikkha: "",
  GurdianMeeting: "",
  TotalAgeSikkha: "",
  MadrasahAdmit: "",
  NewMuslim: "",
  
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  MoktobChalu: Yup.number()
    .required("This Field is required"),
  MoktobAdmit: Yup.string().required("This Field is required"),
  NewMoktob: Yup.string().required("This Field is required"),
  Sikkha: Yup.string().required("This Field is required"),
  TotalStudent: Yup.string().required("This Field is required"),
  TotalSikkha: Yup.string().required("This Field is required"),
  GurdianMeeting: Yup.string().required("This Field is required"),
  TotalAgeSikkha: Yup.string().required("This Field is required"),
  MadrasahAdmit: Yup.string().required("This Field is required"),
  NewMuslim: Yup.string().required("This Field is required"),
  
  
  
});


