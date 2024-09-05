"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Clients = () => {
  const t = useTranslations();

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {t("clients.title1")}
        <span className="text-purple">{t('clients.title2')}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max- gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                  width={40}
                  height={40}
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 2 || company.id === 3 ? 100 : 150}
                  height={40}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
