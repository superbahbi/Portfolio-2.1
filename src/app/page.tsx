import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { features } from "@/lib/feature";

const Page = () => (
  <main className="col-span-1 lg:col-span-3">
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  </main>
);

export default Page;