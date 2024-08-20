import { MdEmail } from "react-icons/md";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import contactAnimation from "../../assets/contact.json";
import { useRef } from "react";

interface IProps {}

const Contact = ({}: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section id="contact" className="py-10 px-0 sm:px-4">
      <h1 className="flex items-center gap-2 text-3xl sm:text-4xl text-lightText dark:text-darkText mb-4">
        <MdEmail className="h-8 w-8 sm:h-10 sm:w-10 fill-secondaryLightText transition-all duration-300 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
        Contact Me
      </h1>
      <p className="text-secondaryLightText dark:text-secondaryDarkText mb-8 text-base">
        Contact me for more information and Get notified when I publish
        something new
      </p>

      <div className="flex items-center justify-between">
        <form action="" className="ml-auto mr-auto sm:ml-0 sm:mr-0 w-full">
          <div className="flex items-start gap-2 mt-6 lg:mt-0 flex-col sm:flex-row sm:items-center">
            <label
              htmlFor="email"
              className="text-secondaryLightText dark:text-secondaryDarkText text-base"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email Address"
              className="bg-[#3f3f4608] dark:bg-[#3f3f4626] border border-borderLight dark:border-borderDark w-60 sm:w-[22rem] py-2 px-2 rounded-md focus:outline-none focus:border-[#2dd4bf] dark:focus:border-[#2dd4bf] transition duration-200 hover:border-[#2dd4bf] hover:dark:border-[#2dd4bf]"
            />
          </div>
          <div className="flex items-start gap-2 mt-6 flex-col sm:flex-row sm:items-center">
            <label
              htmlFor="message"
              className="text-secondaryLightText dark:text-secondaryDarkText text-base"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              required
              placeholder="Message"
              className="bg-[#3f3f4608] dark:bg-[#3f3f4626] border border-borderLight dark:border-borderDark w-60 sm:w-[22rem] py-2 px-2 rounded-md min-h-28 max-h-48 resize-y focus:outline-none focus:border-[#2dd4bf] dark:focus:border-[#2dd4bf] hover:border-[#2dd4bf] hover:dark:border-[#2dd4bf] transition duration-200"
            />
          </div>
          <div className="text-center sm:text-start">
            <button className="project-btn mt-7  !w-28 border border-borderLight dark:border-borderDark hover:scale-90 ">
              Submit
            </button>
          </div>{" "}
        </form>
        <div className="hidden lg:block">
          <Lottie
            lottieRef={lottieRef}
            onLoadedImages={() => {
              if (lottieRef.current) {
                lottieRef.current.setSpeed(0.5);
              }
            }}
            animationData={contactAnimation}
            className="w-[20rem] h-[20rem] xl:w-[28rem] xl:h-[28rem] "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
