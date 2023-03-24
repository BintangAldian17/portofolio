import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IndicatorPage } from "../components/IndicatorPage";
import { motion } from "framer-motion";

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
          setButtonSubmit(notify());
          formik.setSubmitting(false);
          formik.resetForm();
        });
      } catch {
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
    <motion.div className=" w-full h-full flex" exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className=" h-full w-1/2 flex  items-start pt-32 bg-[#161616] shadow-2xl flex-col">
        <div className=" h-[45vh] w-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.39825475779!2d106.91000101468637!3d-6.342438195410184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecd342c2f41b%3A0xe3994fb8f9742be6!2sJl.%20Warga%2C%20RT.10%2FRW.6%2C%20Pd.%20Ranggon%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1679556128608!5m2!1sid!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className=" w-full h-full"></iframe>
        </div>
        <div className=" w-full flex justify-between  py-10 px-4">
          <div className=" w-full h-full border-r-2 border-gray-500 flex justify-center items-center px-2">
            <span className=" text-5xl font-semibold">
              Details <br />
              Contacts
            </span>
          </div>
          <div className=" flex flex-col justify-center items-start px-10  gap-y-1 border-r-2 border-gray-500">
            <div className=" flex flex-col items-start">
              <div className=" flex justify-center items-center gap-x-2">
                <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
                  <MdEmail className=" w-6 h-6 text-[#161616]" />
                </div>
                <span className=" font-bold text-lg">E-mail</span>
              </div>
              <h1>bintangaldian17@gmail.com</h1>
            </div>
            <div className=" flex flex-col items-start gap-y-1">
              <div className=" flex justify-center items-center gap-x-4">
                <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
                  <BsFillTelephoneFill className=" w-5 h-5 text-[#161616]" />
                </div>
                <span className=" font-bold text-lg">Phone</span>
              </div>
              <h1>+62812-2441-7210</h1>
            </div>
            <div className=" flex flex-col items-start gap-y-1">
              <div className=" flex justify-center items-center gap-x-2">
                <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
                  <FaMapMarkerAlt className=" w-5 h-5 text-[#161616]" />
                </div>
                <span className=" font-bold text-lg">Address</span>
              </div>
              <h1>Jakarta,Indonesia</h1>
            </div>
          </div>
          <div className=" w-full px-5 pt-7 flex flex-col gap-y-5">
            <div>
              <h1 className=" text-gray-300 justify-start items-start text-5xl font-semibold">Let's talk</h1>
              <p className=" text-lg text-gray-300 font-semibold pl-2">Or just say hi..</p>
            </div>
            <div className=" flex gap-x-6">
              <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
                <AiFillFacebook className=" w-6 h-6 text-[#161616]" />
              </div>
              <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
                <AiFillGithub className=" w-6 h-6 text-[#161616]" />
              </div>
              <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
                <AiFillInstagram className=" w-6 h-6 text-[#161616]" />
              </div>
              <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
                <AiFillLinkedin className=" w-6 h-6 text-[#161616]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full w-1/2 flex justify-center items-center flex-col bg-gray-100 gap-y-4">
        <div className=" flex items-baseline w-full pl-28">
          <span className=" text-[#161616] font-extrabold tracking-wider border-l-[7px] pl-2 border-[#161616] text-[30px] leading-[35px] drop-shadow-sm border-t-[7px]">
            Contact Me
          </span>
        </div>
        <form className=" w-[65%] flex flex-col gap-y-3 pt-10" onSubmit={formik.handleSubmit}>
          <div className=" w-full flex flex-col">
            <label className=" mb-2 font-bold text-[#161616]" htmlFor="user_name">
              Name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              autoComplete="off"
              className=" bg-transparent outline-none border-b-2 border-gray-300 focus:border-[#161616] text-[#161616] text-lg placeholder:text-base transition-all ease-in-out duration-300
              "
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
            <label className=" mb-2 font-bold text-[#161616]" htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              autoComplete="off"
              className="  bg-transparent outline-none border-b-2 border-gray-300 focus:border-[#161616] text-[#161616]  text-lg placeholder:text-base transition-all ease-in-out duration-300"
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
            <label className=" mb-2 font-bold text-[#161616]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="  bg-transparent outline-none border-b-2 h-32 border-gray-300 focus:border-[#161616] text-[#161616] text-lg placeholder:text-base transition-all ease-in-out duration-300"
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
            {formik.isSubmitting ? (
              <div
                class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"></div>
            ) : (
              "Send Your Email!"
            )}
          </button>
        </form>
      </div>

      <IndicatorPage />
    </motion.div>
  );
};

export default ContactPage;
