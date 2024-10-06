import React, { useState } from 'react';
import Filter from '../components/Filter';
import MealSlider from  '../components/MealSlider';
import { Box, Typography, Grid } from '@mui/material';
import { json } from 'stream/consumers';

const mealtypes = ['Pre-workout', 'Post-workout','Breakfast','Morning-Snacks','Lunch','Evening-Snacks','Dinner'];
const diettypes = ['Non-veg', 'Veg', 'Vegan', 'Eggitarian'];

const meals = [
  {
    id: 1,
    mealName: 'Pre-workout',
    calories: 300,
    ingredients: ['Oats', 'Banana', 'Peanut Butter'],
    dietType: 'Veg',
    flavorType : 'sweet',
  },
  {
    id: 2,
    mealName: 'Post-workout',
    calories: 500,
    ingredients: ['Chicken Breast', 'Broccoli', 'Rice'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 3,
    mealName: 'Lunch',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Veg',
    flavorType : 'sweet',
  },
  {
    id: 4,
    mealName: 'Pre-workout',
    calories: 300,
    ingredients: ['Oats', 'Banana', 'Peanut Butter'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 5,
    mealName: 'Pre-workout',
    calories: 300,
    ingredients: ['Oats', 'Banana', 'Peanut Butter'],
    dietType: 'Vegan',
    flavorType : 'sweet',
  },
  {
    id: 6,
    mealName: 'Lunch',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 7,
    mealName: 'Breakfast',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  }, 
  {
    id: 8,
    mealName: 'Morning-Snacks',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 9,
    mealName: 'Evening-Snacks',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Eggitarian',
    flavorType : 'sweet',
  },
  {
    id: 10,
    mealName: 'Dinner',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 11,
    mealName: 'Pre-workout',
    calories: 300,
    ingredients: ['Oats', 'Banana', 'Peanut Butter'],
    dietType: 'Veg',
    flavorType : 'sweet',
  },
  {
    id: 12,
    mealName: 'Post-workout',
    calories: 300,
    ingredients: ['Oats', 'Banana', 'Peanut Butter'],
    dietType: 'Veg',
    flavorType : 'sweet',
  },
  {
    id: 13,
    mealName: 'Post-workout',
    calories: 300,
    ingredients: ['Oats', 'Banana', 'Peanut Butter'],
    dietType: 'Veg',
    flavorType : 'sweet',
  },
  {
    id: 14,
    mealName: 'Lunch',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 15,
    mealName: 'Breakfast',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 16,
    mealName: 'Breakfast',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 17,
    mealName: 'Morning-Snacks',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 18,
    mealName: 'Morning-Snacks',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 19,
    mealName: 'Evening-Snacks',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Eggitarian',
    flavorType : 'sweet',
  },
  {
    id: 20,
    mealName: 'Evening-Snacks',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Eggitarian',
    flavorType : 'sweet',
  },
  {
    id: 21,
    mealName: 'Dinner',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  },
  {
    id: 21,
    mealName: 'Dinner',
    calories: 600,
    ingredients: ['Salmon', 'Quinoa', 'Avocado'],
    dietType: 'Non-veg',
    flavorType : 'sweet',
  }
];

// Group meals by name
const groupedMeals = meals.reduce((acc, meal) => {
  if (!acc[meal.mealName]) {
    acc[meal.mealName] = [];
  }
  acc[meal.mealName].push(meal);
  return acc;
}, {} as { [key: string]: typeof meals });

console.log('----------------' + JSON.stringify(groupedMeals, null, 2));

const Home: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedMealtype, setSelectedMealtype] = useState<string>('');
  const [selectedDiettype, setSelectedDiettype] = useState<string>('');
  const [totalRecipes, setTotalRecipes] =  useState<string>('');

  const recipesPerSlide = 3; // Adjust how many cards in a row

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  const handleMealtypeChange = (mealtype: string) => {
    setSelectedMealtype(mealtype);
  };
  const handleDiettypeChange = (diettype: string) => {
    setSelectedDiettype(diettype);
  };
  
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={9}>
        <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: '4px' }}>
          { selectedMealtype !== '' && selectedMealtype ? (
            <MealSlider meal={groupedMeals[selectedMealtype]} nameOfDiet={selectedMealtype} totalRecipes= {groupedMeals[selectedMealtype].length} recipesPerSlide = {recipesPerSlide} />
          ) : selectedDiettype !== '' && selectedDiettype ? (
            <MealSlider meal={groupedMeals[selectedDiettype]} nameOfDiet={selectedDiettype} totalRecipes= {groupedMeals[selectedDiettype].length} recipesPerSlide = {recipesPerSlide} />
          ) : mealtypes.includes(searchTerm) ? (
            <MealSlider meal={groupedMeals[searchTerm]} nameOfDiet={searchTerm} totalRecipes= {groupedMeals[searchTerm].length} recipesPerSlide = {recipesPerSlide} />
          ) : searchTerm !== '' && searchTerm ?(
            <Typography variant="h6">Searched Items not found</Typography>
          ) : (<div>
                  {Object.keys(groupedMeals).map((mealName) => (
                    <div key={mealName}>
                      {/* Pass the array of meals for each mealName to MealSlider */}
                      <MealSlider meal={groupedMeals[mealName]} nameOfDiet={mealName} totalRecipes= {groupedMeals[mealName].length} recipesPerSlide = {recipesPerSlide} />
                    </div>
                  ))}
               </div>
              )}
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Filter
          onSearch={handleSearch}
          onMealtypeChange={handleMealtypeChange}
          mealtypes={mealtypes}
          onDiettypeChange={handleDiettypeChange}
          diettypes={diettypes}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
