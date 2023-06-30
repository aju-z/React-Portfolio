import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactImg from "../assets/contact-image.jpeg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      toast.error("Please fill in all required fields correctly!");
    } else {
      // Submit the form here
      toast.success("Form submitted successfully!");
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-rainbow">
              CONTACT ME
            </span>{" "}
            FOR DETAILS
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImg} alt="contact" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            // target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/ajees2k2@gmail.com"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 focus:border-white"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 25,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required!"}
                {errors.name.type === "maxLegnth" && "Max legnth is 25 char!"}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 focus:border-white"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required!"}
                {errors.email.type === "pattern" && "Invalid email address!"}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 resize-none focus:border-white"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 200,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required!"}
                {errors.message.type === "maxLength" &&
                  "Max legnth is 200 char!"}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            >
              SUBMIT YOUR MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
