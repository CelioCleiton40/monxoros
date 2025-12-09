import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import childrenFire01 from '@/assets/DiscoverMyWorkProductsImage/childrenFire/AboutMe-ChildrenFire-01.jpg';
import childrenFire02 from '@/assets/DiscoverMyWorkProductsImage/childrenFire/AboutMe-ChildrenFire-02.jpg';
import childrenFire03 from '@/assets/DiscoverMyWorkProductsImage/childrenFire/AboutMe-ChildrenFire-03.jpg';

import miners01 from '@/assets/DiscoverMyWorkProductsImage/miners/AboutMe-Miners-01.jpg';
import miners02 from '@/assets/DiscoverMyWorkProductsImage/miners/AboutMe-Miners-02.jpg';
import miners03 from '@/assets/DiscoverMyWorkProductsImage/miners/AboutMe-Miners-03.jpg';

import candid01 from '@/assets/DiscoverMyWorkProductsImage/candid/AboutMe-Candid-01.jpg';
import candid02 from '@/assets/DiscoverMyWorkProductsImage/candid/AboutMe-Candid-02.jpg';
import candid03 from '@/assets/DiscoverMyWorkProductsImage/candid/AboutMe-Candid-03.jpg';



function AutoImage({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className="relative w-full h-[320px] rounded-lg border border-stone-200 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
}

export function SeriesSection() {
  return (
    <section
  aria-labelledby="series-title"
  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
>
  <h3
    id="series-title"
    className="text-stone-900 font-semibold text-2xl tracking-tight"
  >
    Series
  </h3>

  <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {/* Card 1 */}
    <Card className="flex flex-col h-full">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold">
          Candid Photography
        </CardTitle>
        <p className="text-stone-500 text-xs uppercase tracking-wide">
          encounter with the sacred
        </p>
        <CardDescription className="text-sm leading-relaxed">
          The photographic language can awaken in individuals the need to relate
          to the sacred. The understanding of beauty and contemplation raises
          our awareness and empathy for the community. The path of
          self-knowledge.
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <AutoImage
          images={[candid01, candid02, candid03]}
          alt="Candid Photography placeholder"
        />
      </CardContent>
    </Card>

    {/* Card 2 */}
    <Card className="flex flex-col h-full">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold">
          Kaolin miners
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          A series of journalistic reports that show the life of the kaolin
          miners. A rustic activity developed by people who risk their lives in
          order to keep the lives of their family members. The report highlights
          the human aspect and the impact of this reality.
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <AutoImage
          images={[miners01, miners02, miners03]}
          alt="Kaolin miners placeholder"
        />
      </CardContent>
    </Card>

    {/* Card 3 */}
    <Card className="flex flex-col h-full">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold">
          Children of fire
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          A series of journalistic reports that show the life of lime workers.
          A rustic industry with little mechanization and cheap labor. The
          report reveals the human aspect and the impacts of this reality on
          their families.
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <AutoImage
          images={[childrenFire01, childrenFire02, childrenFire03]}
          alt="Children of fire placeholder"
        />
      </CardContent>
    </Card>
  </div>
</section>

  );
}
