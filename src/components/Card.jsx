import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Button from "./Button";

const Card = ({ basis, cta, desc, title, subtitle, hover }) => {
  return (
    <div
      className={`${basis} group min-h-[19rem] md:min-h-96 flex flex-col justify-between bg-violet-600 md:bg-zinc-800 rounded-xl px-4 py-5 ${
        hover ? "hover:bg-violet-600" : "hover:bg-zinc-700"
      } transition-colors duration-300`}
    >
      <div className="w-full group-hover:px-1 transition-all duration-300">
        <div className="flex items-center justify-between">
          <h5 className="text-base font-light">{subtitle}</h5>
          <HiOutlineArrowLongRight className="text-lg" />
        </div>
        <h3 className="text-2xl md:text-3xl font-medium mt-4 leading-none">{title}</h3>
      </div>

      <div className="w-full">
        {cta && (
          <>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.015em] mt-4">
              Start a Project
            </h1>
            <div className="mt-5">
              <Button
                title="Contact Us"
                icon={false}
                bgColor="transparent"
                textColor="text-white"
              />
            </div>
          </>
        )}

        {desc && (
          <p className="text-sm md:text-base font-light tracking-wide mt-2">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
