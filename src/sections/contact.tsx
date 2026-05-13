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
      toast.error("The message must contain at least 5 words.");
      return;
    }

    setPending(true);
    try {
      const config = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      };
      await emailjs.sendForm(
        config.serviceId,
        config.templateId,
        formRef.current,
        { publicKey: config.publicKey }
      );
      toast.success("Transmission received.");
      formRef.current.reset();
    } catch (err) {
      console.error("Email submission error:", err);
      toast.error("Transmission failed. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative mb-28 sm:mb-40 px-6 sm:px-12 scroll-mt-28"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionHeading text="Contact" label="05 — OPEN CHANNEL" />

        <p className="font-mono text-ship-muted text-sm tracking-hud mb-8">
          DIRECT FREQUENCY:{" "}
          <a
            className="text-hud-cyan hover:text-hud-teal transition-colors underline underline-offset-2"
            href="mailto:mkparusomtochi26@gmail.com"
          >
            mkparusomtochi26@gmail.com
          </a>
          {"  "}— or transmit via the form below.
        </p>

        {/* HUD Panel */}
        <div className="hud-bracket bg-space-900 border border-space-700 p-6 sm:p-10">
          <p className="font-mono text-[10px] tracking-mission uppercase text-hud-cyan/60 mb-6">
            ◆ ESTABLISHING COMMUNICATION LINK
          </p>

          <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="font-mono text-[10px] tracking-mission uppercase text-ship-faint block mb-2">
                TRANSMISSION SOURCE — NAME
              </label>
              <input
                className="w-full h-12 px-4 bg-space-800 border border-space-700 focus:border-hud-cyan/50 text-ship-text text-sm font-sans outline-none transition-colors placeholder:text-ship-faint"
                name="from_name"
                type="text"
                required
                maxLength={500}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-mono text-[10px] tracking-mission uppercase text-ship-faint block mb-2">
                FREQUENCY — EMAIL
              </label>
              <input
                className="w-full h-12 px-4 bg-space-800 border border-space-700 focus:border-hud-cyan/50 text-ship-text text-sm font-sans outline-none transition-colors placeholder:text-ship-faint"
                name="from_email"
                type="email"
                required
                maxLength={500}
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-mono text-[10px] tracking-mission uppercase text-ship-faint block mb-2">
                PAYLOAD — MESSAGE
              </label>
              <textarea
                className="w-full h-40 px-4 py-3 bg-space-800 border border-space-700 focus:border-hud-cyan/50 text-ship-text text-sm font-sans outline-none transition-colors resize-none placeholder:text-ship-faint"
                name="message"
                required
                maxLength={5000}
                placeholder="Your message..."
              />
            </div>

            <div className="flex justify-end pt-2">
              <SubmitBtn pending={isPending} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

