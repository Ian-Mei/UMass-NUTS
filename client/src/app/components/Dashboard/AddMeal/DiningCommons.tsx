"use client";

import React, { useEffect, useState } from 'react';
import FoodSection from './FoodSection';
import {Food } from '../types';




function dateToMeal() {
  const date = new Date();
  const time = [date.getHours(), date.getMinutes()];
  const day = date.getDay();
  
  if (time[0] >= 7 && time[0] <= 10) {
    if (day >= 5) return "lunch_menu";
    else return "breakfast_menu";
  }
  else if (time[0] >= 11 && (time[0] <= 16 && time[1] <= 29)) {
    return "lunch_menu";
  }
  else if (time[0] >= 16 && time[0] <= 20) {
    return "dinner_menu";
  }
  else if (time[0] >= 21 && time[0] <= 23) {
    return "latenight_menu";
  }
}


const DiningCommons: React.FC = () => {
  const [selection, setSelection] = useState('');
  const [listitems, setListItems] = useState<JSX.Element[]>([]);
    const fetchData = async () => {
    try {
    const response = await fetch('http://localhost:3001/food');
    const result = await response.json();
    const time = dateToMeal();
    const foodItems = (result as Food[]).filter((item) => item.hall === selection && item.time === 'lunch_menu');;
    const stations = foodItems.reduce((acc, item) => {  
      if (!acc[item.station]) {
        acc[item.station] = [];
      }
      acc[item.station].push(item);
      return acc;
    }, {} as Record<string, Food[]>);
    const newListItems = Object.keys(stations).map((key) => {
      return <FoodSection key={key} title={key} items={stations[key]} />;
    });
  
    setListItems(newListItems);
  }
  catch (error) {
    console.log(error);
  }
  };

  const DiningCommonsHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
    const handleSelection = (option:string) => {
      setSelection(option);
      fetchData();
      setIsOpen(false); // Optionally close the dropdown upon selection
    };
  
    // Dummy components for demonstration
    const OptionOneContent = () => <p>You selected Worcester!</p>;
    const OptionTwoContent = () => <p>You selected Franklin!</p>;
    const OptionThreeContent = () => <p>You selected Berkshire!</p>;
    const OptionFourContent = () => <p>You selected Hampshire!</p>;
  
    return (
      <main className=" flex overflow-hidden flex-col items-center">
        <div className="overflow-hidden flex items-center justify-center px-16 py-10 w-full text-4xl font-medium text-center text-white bg-red-900 rounded-3xl">
          <span>
            {selection === '' ? 'DINING COMMONS' : selection.toUpperCase()}
          </span>
          <img 
            onClick={toggleDropdown} 
            loading="lazy" 
            src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" 
            alt="Expand" 
            className="w-7 ml-4 aspect-square cursor-pointer" 
          />
        </div>
        {isOpen && (
          <section className="flex flex-col mt-6 w-full max-md:max-w-full bg-white rounded-xl shadow-md p-4">
            <button onClick={() => handleSelection('worcester')} className="p-2 hover:bg-gray-200">Worcester</button>
            <button onClick={() => handleSelection('franklin')} className="p-2 hover:bg-gray-200">Franklin</button>
            <button onClick={() => handleSelection('berkshire')} className="p-2 hover:bg-gray-200">Berkshire</button>
            <button onClick={() => handleSelection('hampshire')} className="p-2 hover:bg-gray-200">Hampshire</button>
          </section>
        )}

      </main>
    );
  };




  return (
    <main className=" p-8 ml-[17%] mr-[22%] flex overflow-hidden flex-col items-center">
        <DiningCommonsHeader/>
      <section className="flex flex-col mt-6 w-full max-md:max-w-full">
      {listitems}

      </section>
    </main>
  );
};

export default DiningCommons;