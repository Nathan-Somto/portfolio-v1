import SectionHeading from "./section-heading";
import { socials } from "../data";
export default function Footer() {
  return (
    <footer className="mb-10  lg:text-left w-full text-center ">
      <div className="px-16 mb-28">
        <SectionHeading
          text="Let's Connect 🤙"
          className="lg:!mb-8"
        />
        <p className="text-center opacity-80 ">You can follow me on any of the following platforms</p>
      </div>
      <div className="flex lg:flex-row text-gray-500 flex-col w-full mt-5 items-center lg:justify-between px-16">
        <div
          className="flex gap-4 mb-5 lg:justify-start justify-center"
        >
          {
            socials.map(({ icon: Icon, link, tooltip }, index) => (
              <a
                key={index + link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-900"
                data-blobity-tooltip={tooltip}
                data-blobity-offset-x={0}
              >
                <Icon className="h-6 w-6 lg:h-7 lg:w-7 flex-shrink-0" />
              </a>
            ))
          }
        </div>
        <div className="text-sm">
          <p className="mb-2 block text-sm lg:text-[15px]">
            &copy; {new Date().getFullYear()} Developed and Designed by Nathan-Somto
          </p>
        </div>
      </div>
    </footer>
  );
}