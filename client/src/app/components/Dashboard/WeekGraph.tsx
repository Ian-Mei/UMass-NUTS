/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface WeekGraphProps {}

const WeekGraph: React.FC<WeekGraphProps> = () => {
  return (
    <section>
      <h2 className="self-stretch w-full text-base font-medium whitespace-nowrap text-neutral-800">
        WEEK
      </h2>
      <div className="flex gap-3 justify-center items-end self-center mt-9 w-60 max-w-full rounded-md border border-solid border-neutral-400 min-h-[116px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col flex-1 shrink rounded-none basis-0">
          <div className="flex z-10 shrink-0 bg-pink-800 rounded h-[15px]" />
          <div className="flex shrink-0 bg-red-900 h-[29px]" />
          <div className="flex shrink-0 bg-pink-950 h-[57px]" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8981b3048e8391eaf3aa868bd8dd966b0cd8dc53bc5192a274094a081cdcf03?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Graph bar" className="object-contain flex-1 shrink w-6 rounded-none aspect-[0.75] basis-0" />
        <div className="flex flex-col flex-1 shrink rounded-none basis-0">
          <div className="flex z-10 shrink-0 bg-pink-800 rounded h-[17px]" />
          <div className="flex shrink-0 bg-red-900 h-[34px]" />
          <div className="flex shrink-0 bg-pink-950 h-[67px]" />
        </div>
        <div className="flex flex-col flex-1 shrink rounded-none basis-0">
          <div className="flex z-10 shrink-0 h-2.5 bg-pink-800 rounded" />
          <div className="flex shrink-0 bg-red-900 h-[19px]" />
          <div className="flex shrink-0 bg-pink-950 h-[38px]" />
        </div>
        <div className="flex flex-col flex-1 shrink rounded-none basis-0">
          <div className="flex z-10 shrink-0 h-3.5 bg-pink-800 rounded" />
          <div className="flex shrink-0 bg-red-900 h-[27px]" />
          <div className="flex shrink-0 bg-pink-950 h-[55px]" />
        </div>
        <div className="flex flex-col flex-1 shrink rounded-none basis-0">
          <div className="flex z-10 shrink-0 bg-pink-800 rounded h-[9px]" />
          <div className="flex shrink-0 bg-red-900 h-[18px]" />
          <div className="flex shrink-0 h-9 bg-pink-950" />
        </div>
        <div className="flex flex-col flex-1 shrink rounded-none basis-0">
          <div className="flex z-10 shrink-0 h-3 bg-pink-800 rounded" />
          <div className="flex shrink-0 w-6 h-6 bg-red-900" />
          <div className="flex shrink-0 bg-pink-950 h-[46px]" />
        </div>
      </div>
    </section>
  );
};

export default WeekGraph;