"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";
import Image from "next/image";
import { useTranslations } from 'next-intl';
const RecentProjects = () => {
  const t = useTranslations();
  return (
    <section id="projects" className="pt-20 pb-52">
      <h1 className="heading">
        {t('recentProjects.title1')}{" "}
        <span className="text-purple">
          {t('recentProjects.title2')}
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-y-[275px] gap-x-20 28 mt-44">
        {projects.map((item) => (
          <div
            className=" h-[10vh] lg:h-[20vh] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[10vh] lg:h-[20vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    width={500}
                    height={500}
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute rounded-lg top-[5px] scale-95 rotate-3"
                  width={500}
                  height={500}
                />
              </div>

              <h1 className="font-bold text-indigo-950 dark:text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                {t(item.title)}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white"
                style={{
                  margin: "1vh 0",
                }}
              >
                {t(item.des)}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-2"
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {t('recentProjects.cardButton')}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
