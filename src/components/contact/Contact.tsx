import { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import emailjs from "@emailjs/browser";
import contactAnimation from "../../assets/contact.json";
import { Oval } from "react-loader-spinner";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {}

const Contact = ({}: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      setIsLoading(true);
      emailjs
        .sendForm("service_3q0yekc", "template_rww48vy", formRef.current, {
          publicKey: "ISWV3_Uv6U-TfAmUb",
        })
        .then(
          () => {
            setIsSuccess(true);
            setIsLoading(false);
            // Clear the form fields
            formRef.current?.reset();

            // Hide success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setIsLoading(false);
          }
        );
    } else {
      console.log("Form reference is null");
    }
  };

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play(); // Play the animation after it's loaded
    }
  }, []);

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="py-10 px-0 sm:px-4"
    >
      <h1 className="flex items-center gap-2 text-3xl sm:text-4xl text-lightText dark:text-darkText mb-4">
        <MdEmail className="h-8 w-8 sm:h-10 sm:w-10 fill-secondaryLightText transition-all duration-300 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
        Contact Me
      </h1>
      <p className="text-secondaryLightText dark:text-secondaryDarkText mb-8 text-base">
        Contact me for more information and get notified when I publish
        something new.
      </p>

      <div className="flex items-center justify-between">
        <form ref={formRef} onSubmit={sendEmail} className="mx-auto md:mx-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mt-6 lg:mt-0">
            <label
              htmlFor="name"
              className="text-base text-secondaryLightText dark:text-secondaryDarkText"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              placeholder="Your Name"
              autoComplete="off"
              disabled={isLoading}
              className="input-field"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6 lg:mt-6">
            <label
              htmlFor="email"
              className="text-base text-secondaryLightText dark:text-secondaryDarkText"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address"
              autoComplete="off"
              disabled={isLoading}
              className="input-field"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6">
            <label
              htmlFor="message"
              className="text-base text-secondaryLightText dark:text-secondaryDarkText"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
              autoComplete="off"
              disabled={isLoading}
              className="input-field resize-y min-h-28 max-h-48"
            />
          </div>
          <div className="text-center sm:text-start mt-7">
            <button
              type="submit"
              disabled={isLoading}
              className="project-btn flex items-center justify-center"
            >
              {isLoading ? (
                <Oval
                  visible={true}
                  height="24"
                  width="24"
                  color="#4A90E2"
                  ariaLabel="oval-loading"
                />
              ) : (
                "Submit"
              )}
            </button>
            {isSuccess && (
              <div className="text-green-500 mt-4">
                ✅ Your message has been sent successfully!
              </div>
            )}
          </div>
        </form>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
          <Lottie
            lottieRef={lottieRef}
            onLoadedImages={() => {
              if (lottieRef.current) {
                lottieRef.current.setSpeed(0.5);
              }
            }}
            animationData={contactAnimation}
            className="w-[20rem] h-[20rem] xl:w-[24rem] xl:h-[24rem] translate-y-[-20px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
