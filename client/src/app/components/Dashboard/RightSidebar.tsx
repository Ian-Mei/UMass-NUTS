/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import WeekGraph from './WeekGraph';
import SuggestedMeals from './SuggestedMeals';

interface RightSidebarProps {}

const RightSidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 right-0 flex flex-col w-[22%] h-screen p-8 bg-white shadow-xl z-20 max-md:w-full max-md:p-5">
      <div className="flex flex-col px- pt-8 pb-80 mx-auto w-full bg-white min-h-full pr-2 max-md:px-5 max-md:pb-24 max-md:mt-8">
        <WeekGraph />
        <SuggestedMeals />
      </div>
    </aside>
  );
};

export default RightSidebar;