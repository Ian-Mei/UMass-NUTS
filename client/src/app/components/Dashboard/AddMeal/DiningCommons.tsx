"use client";

import React, { useEffect, useState } from 'react';
import FoodSection from './FoodSection';
import { FoodItem,Food } from '../types';

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

const bowlItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Shoyu Ramen',
    calories: 0,
  }
];

const wokItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Stir Fry with Noodles',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Stir Fry yum yum',
    calories: 0,
  }
];

const grillItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Chicken Burger',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Hamburger',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Fries',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Sweet Fries',
    calories: 0,
  }
];

const DiningCommons: React.FC = () => {
  const [listitems, setListItems] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/food');
        const result = await response.json();
        const time = dateToMeal();
        const foodItems = (result as Food[]).filter((item) => item.hall === 'berkshire' && item.time === 'lunch_menu');;
        const stations = foodItems.reduce((acc, item) => {  
          if (!acc[item.station]) {
            acc[item.station] = [];
          }
          acc[item.station].push(item);
          return acc;
        }, {} as Record<string, Food[]>);
        const newListItems = Object.keys(stations).map((key) => {
          const foodItems = stations[key].map((item) => {
            return { location: item.hall, name: item.name, calories: item.calories } as FoodItem;
          });
          return <FoodSection key={key} title={key} items={foodItems} />;
        });

        setListItems(newListItems);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <main className=" p-8 ml-[17%] mr-[22%] flex overflow-hidden flex-col items-center">
      <header className="overflow-hidden px-16 py-10 w-full text-4xl font-medium text-center text-white bg-red-900 rounded-3xl">
        DINING COMMONS
      </header>
      <section className="flex flex-col mt-6 w-full max-md:max-w-full">
      {listitems}

      </section>
    </main>
  );
};

export default DiningCommons;