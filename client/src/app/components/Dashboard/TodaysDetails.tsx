/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface NutrientRowProps {
  name: string;
  type: string;
  percentage: number;
}

const NutrientRow: React.FC<NutrientRowProps> = ({ name, type, percentage }) => (
  <div className="flex flex-wrap gap-10 items-center mt-6 w-full max-md:max-w-full max-sm:hidden">
    <div className="flex grow shrink gap-2 justify-center items-center self-stretch my-auto text-sm font-medium whitespace-nowrap min-w-[240px] text-neutral-800 w-[251px]">
      <div className="flex-1 shrink self-stretch my-auto w-full min-w-[240px]">
        {name}
      </div>
    </div>
    <div className="gap-2.5 self-stretch px-3 py-0.5 my-auto text-xs uppercase whitespace-nowrap rounded-lg bg-pink-800 bg-opacity-30 min-h-[15px] text-pink-950">
      {type}
    </div>
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] rounded-[50px] w-[253px]">
      <div className="flex flex-col items-start bg-zinc-300 rounded-[50px] max-md:pr-5">
        <div className="flex shrink-0 h-1.5 bg-red-900 rounded-[50px]" style={{ width: `${percentage}%` }} />
      </div>
    </div>
    <div className="gap-2.5 self-stretch px-3 py-0.5 my-auto text-xs uppercase whitespace-nowrap rounded-lg bg-pink-800 bg-opacity-30 min-h-[15px] text-pink-950">
      {percentage}%
    </div>
  </div>
);

interface TodaysDetailsProps {}

const TodaysDetails: React.FC<TodaysDetailsProps> = () => {
  const nutrients = [
    { name: "Fiber", type: "CARBS", percentage: 10 },
    { name: "Protein", type: "PROTEIN", percentage: 25 },
    { name: "Fat", type: "FAT", percentage: 15 },
  ];

  return (
    <section className="flex flex-col flex-1 mt-6 w-full max-md:max-w-full max-sm:hidden">
      <div className="flex flex-wrap justify-between w-full max-md:max-w-full max-sm:hidden">
        <h2 className="flex-1 shrink text-base font-medium basis-0 text-neutral-800 max-md:max-w-full">
          TODAY'S DETAILS
        </h2>
        <a href="#" className="gap-3 self-stretch my-auto text-xs text-right text-blue-600">
          See All
        </a>
      </div>
      <div className="flex flex-col mt-5 w-full min-h-[456px] max-md:max-w-full max-sm:hidden">
        <div className="flex flex-col px-6 py-5 w-full bg-white rounded-xl shadow-2xl min-h-[456px] max-md:px-5 max-md:max-w-full max-sm:hidden">
          <div className="flex flex-wrap gap-10 justify-center items-center w-full text-xs font-semibold uppercase text-neutral-700 max-md:max-w-full max-sm:hidden">
            <div className="self-stretch my-auto w-[275px]">NUTRIENTS</div>
            <div className="self-stretch my-auto text-center w-[21px]">TYPE</div>
            <div className="flex-1 shrink self-stretch my-auto text-center basis-0">AMOUNTS</div>
            <div className="self-stretch my-auto w-20 text-center"> . </div>
          </div>
          {nutrients.map((nutrient, index) => (
            <NutrientRow key={index} {...nutrient} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysDetails;