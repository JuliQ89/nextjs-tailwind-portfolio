"use client";

import ellipse from "../assets/icons/ellipse.svg";
import me from "../assets/images/thats_me.png";
import Image from "next/image";
import facebook from "../assets/icons/sozial/facebook.svg";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full pt-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-5 items-center">
          <div className="relative">
            <Image src={me} alt="" width={258} height={259} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="underline text-sm mb-1">A Designer who</span>
            <h1 className="font-medium text-4xl leading-[3rem]">
              Judges a book <br /> by its{" "}
              <span className="text-[#7127BA] relative">
                <Image
                  src={ellipse}
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  width={188}
                />
                <span className="p-4">cover</span>
              </span>
              ...
            </h1>
            <p className="text-sm mt-3">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-3xl">
            <Typewriter
              words={["I'm a Software Engineer.", "I'm a Designer."]}
              cursor
              loop={Infinity}
              typeSpeed={125}
              deleteSpeed={125}
              delaySpeed={800}
            />
          </h1>
          <p className="flex gap-1 items-center w-fit">
            Currently. I'm a Software Engineer at
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="text-[#1877F2] text-sm flex gap-1 items-center"
            >
              <Image src={facebook} alt="" /> Facebook
            </Link>
            .
          </p>
        </div>

        <div>
          <p className="max-w-2xl leading-7 tracking-wide">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
