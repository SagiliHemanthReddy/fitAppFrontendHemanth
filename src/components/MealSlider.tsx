import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Divider, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MealBox from  '../components/MealBox';

interface MealSliderProps  {
  meal: {
    id: number;
    mealName: string;
    calories: number;
    ingredients: string[];
    dietType: string;
  }[];
  nameOfDiet: string;
  totalRecipes: number;
  recipesPerSlide: number;
}

const MealSlider: React.FC<MealSliderProps> = ({ nameOfDiet,totalRecipes,recipesPerSlide }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const handleNext = () => {
    if (currentStartIndex + recipesPerSlide < totalRecipes) {
      setCurrentStartIndex(currentStartIndex + recipesPerSlide);
    }
  };
  const handlePrev = () => {
    if (currentStartIndex - recipesPerSlide >= 0) {
      setCurrentStartIndex(currentStartIndex - recipesPerSlide);
    }
  };

  const cards = Array.from({ length: totalRecipes }, (_, index) => (
    <MealBox index={index} />
  ));

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
    <h1 style ={{ paddingLeft: 15, paddingBottom: 1 }} >{nameOfDiet}</h1>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , padding: 1 }} >
      {currentStartIndex > 0 && (
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>
      )}
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {cards.slice(currentStartIndex, currentStartIndex + recipesPerSlide)}
      </Box>
      {currentStartIndex + recipesPerSlide < totalRecipes && (
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
    </Grid>

  );
};

export default MealSlider;
