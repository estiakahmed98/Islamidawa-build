"use client";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialFormData, validationSchema } from "@/app/data/DawatiData";

const DawatiForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="w-full mx-auto mt-8  rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">দাওয়াতি বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা নিয়ে মজলিস হয়েছে
              </label>
              <Field
                name="DawatMojlish"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="DawatMojlish"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা মজলিসে মোট অংশগ্রহণ
              </label>
              <Field
                name="DawatGurutto"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="DawatGurutto"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াত প্রশিক্ষণ কর্মশালার আয়োজন হয়েছে
              </label>
              <Field
                name="DawatProsikkhon"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="DawatProsikkhon"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াত প্রশিক্ষণ কর্মশালায় মোট অংশগ্রহণ{" "}
              </label>
              <Field
                name="DawatKormosala"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="DawatKormosala"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="mb-2 block text-gray-700">
                জুমার মজলিসে আলোচনা হয়েছে
              </label>
              <Field
                name="JumarMojlish"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="JumarMojlish"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                ধর্ম সবার আয়োজন হয়েছে
              </label>
              <Field
                name="DhormoSova"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="DhormoSova"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="secondary" size="default" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DawatiForm;
