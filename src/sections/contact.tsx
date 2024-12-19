import SectionHeading from "../components/section-heading";
import { useSectionInView } from "../hooks";
import SubmitBtn from "../components/submit-btn";
import toast from "react-hot-toast";
import React from "react";
import emailjs from '@emailjs/browser';
export default function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isPending, setPending] = React.useState(false);
  const { ref } = useSectionInView("Contact");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const name = formData.get("from_name") as string;
    const email = formData.get("from_email") as string;
    const message = formData.get("message") as string;
    formData.set('to_email', 'nturner560@gmail.com');
    formData.set('to_name', 'Mkparu Somtochi');
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (message.split(' ').length < 5) {
      toast.error("the message must contain at least 10 words")
      return;
    }
    setPending(true);
    try {

      if (!formRef.current) return;
      //console.log({ name, email, message });
      const config = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }
      const res = await emailjs
        .sendForm(
          config.serviceId,
          config.templateId,
          formRef.current,
          {
            publicKey: config.publicKey
          }
        );
      console.log("the res", res);
      toast.success("Email sent successfully!");
    }
    catch (err) {
      console.error("Email submission error:", err);
      toast.error("Email failed to send. Please try again.");
    }
    finally {
      setPending(false);
    }

  }




  return (
    <section
      id="contact"
      ref={ref}
      className="mb-28 px-12 bg-black  pb-14 mx-auto sticky top-28 pt-14 scroll-mt-28 text-center sm:mb-40"
    >
      <div className="w-[min(100%,42rem)] mx-auto">
        <SectionHeading text="Contact" />

        <p className="-mt-6 opacity-70">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:mkparusomtochi26@gmail.com">
            mkparusomtochi26@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          ref={formRef}
          className="mt-10 flex flex-col dark:text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 px-4 rounded-lg mb-5 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="from_name"
            type="text"
            required
            maxLength={500}
            placeholder="Your full name"
          />
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="from_email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-5  resize-none rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn pending={isPending} />
        </form>
      </div>
    </section>
  );
}