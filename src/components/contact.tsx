import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Contact() {
    const [isPending, setIsPending]= useState(false);
  const { ref } = useSectionInView("Contact");
    function handleSubmit(e:React.FormEvent) {
        try{
            e.preventDefault();
            setIsPending(true)
           setTimeout(() => {
            setIsPending(false);
            toast.success("Email sent successfully!");
           }, 4500)

  
            
        }
        catch(err){
            console.log('error!')
        }
        
          }
    
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.7 }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mkparusomtochi26@gmail.com">
          mkparusomtochi26@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={isPending} />
      </form>
    </motion.section>
  );
}