import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [buttonSubmit, setButtonSubmit] = useState(null);
  const formik = useFormik({
    initialValues: {
      user_name: "",
      to_name: "service_dn9jexq",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("*Name field is required"),
      user_email: Yup.string().email("invalid email address").required("*email field is required"),
      message: Yup.string().required("*Message field is required"),
    }),
    onSubmit: (values) => {
      try {
        emailjs.send("service_dn9jexq", "template_m49ysky", values, "F2zSu7c1id_oM1ZaS").then(() => {
          console.log("sucsess");
          setButtonSubmit(notify());
          formik.setSubmitting(false);
          formik.resetForm();
        });
      } catch {
        console.log("error");
        setButtonSubmit(notify());
        formik.setSubmitting(false);
      }
    },
  });

  const notify = () =>
    toast("Email Send Sucsess", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div className=" w-full h-full flex">
      <div className=" h-full w-1/2 flex justify-center items-center bg-[#161616] shadow-2xl">
        <div className=" h-full w-[70%] flex flex-col justify-center items-center gap-y-14">
          <div className=" w-full flex  justify-center items-center">
            <h1 className=" text-[43px] font-semibold border-b-2 border-slate-200">Contact With Me</h1>
          </div>
          <div className=" flex gap-x-14">
            <div className=" w-full flex flex-col justify-center items-center gap-y-14">
              <MdEmail className=" w-10 h-10 text-gray-700" />
              <BsTelephonePlusFill className=" w-9 h-9 text-gray-700" />
              <FaMapMarkerAlt className=" w-10 h-10 text-gray-700" />
            </div>
            <div className=" w-full flex flex-col justify-center items-start gap-y-14">
              <h1 className=" text-[27px] font-semibold ">bintangaldian17@gmail.com</h1>
              <h1 className=" text-[27px] font-semibold ">+62812-2441-7210</h1>
              <h1 className=" text-[30px] font-semibold ">Jakarta,Indonesia</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full w-1/2 flex justify-center items-center bg-gray-100">
        <form className=" w-[65%] flex flex-col gap-y-3 pt-10" onSubmit={formik.handleSubmit}>
          <div className=" w-full flex flex-col">
            <label className=" mb-2 font-bold text-gray-600" htmlFor="user_name">
              Name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              autoComplete="off"
              className=" bg-[#161616] h-12 focus:outline-2 focus:outline-black rounded-xl text-gray-100 text-xl px-3 placeholder:text-lg"
              placeholder="Your Name"
              onChange={formik.handleChange}
              value={formik.values.user_name}
            />
            <div
              className={`${
                formik.touched.user_name && formik.errors.user_name ? "show" : ""
              } text-gray-700 font-medium`}>
              {formik.errors.user_name}
            </div>
          </div>
          <div className=" w-full flex flex-col">
            <label className=" mb-2 font-bold text-gray-600" htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              autoComplete="off"
              className=" bg-[#161616] h-12 focus:outline-2 focus:outline-black rounded-xl text-gray-100 text-xl px-3 placeholder:text-lg"
              placeholder="Your Email"
              onChange={formik.handleChange}
              value={formik.values.user_email}
            />
            <div
              className={`${
                formik.touched.user_email && formik.errors.user_email ? "show" : ""
              } text-gray-700 font-medium`}>
              {formik.errors.user_email}
            </div>
          </div>
          <div className=" w-full flex flex-col">
            <label className=" mb-2 font-bold text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=" bg-[#161616] h-48 py-2 px-2 focus:outline-2 focus:outline-black rounded-xl text-gray-100 text-xl px-3cplaceholder:text-md"
              placeholder="Type Your Message..."
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <div
              className={`${formik.touched.message && formik.errors.message ? "show" : ""} text-gray-700 font-medium`}>
              {formik.errors.message}
            </div>
          </div>
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className=" w-full h-11 rounded-xl flex items-center justify-center bg-[#161616] mt-4 font-bold hover:bg-opacity-90  transition-all ease-in-out duration-150">
            Send Your Message!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
