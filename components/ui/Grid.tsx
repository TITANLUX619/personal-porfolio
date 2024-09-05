import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { Suspense } from "react";

const Grid = async () => {
  return (
    <section id="about">
      <Suspense fallback={<div>Loading...</div>}>
        <BentoGrid className="w-full py-20">
          {gridItems.map((item, i) => (
            <Suspense key={item.id} fallback={<div>Loading...</div>}>
              <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            </Suspense>
          ))}
        </BentoGrid>
      </Suspense>

    </section>
  );
};

export default Grid;
