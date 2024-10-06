import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface MealBoxProps  {
  index:number;
}

const MealBox: React.FC<MealBoxProps> = ({ index }) => {

  return (

    <Card
  key={index}
  sx={{
    border: '1px solid grey',
    minWidth: 300,
    maxWidth: 300,
    height: 300, // Set the fixed height of the card
    margin: '0 6px',
    display: 'inline-block',
    whiteSpace: 'normal', // Text to wrap
    overflow: 'hidden', // Prevent overflowing content
    textOverflow: 'ellipsis', // Indicate overflow with "..."
  }}
>
  <CardContent sx={{ height: '100%', overflow: 'auto' }}> {/* Allows scrolling if content exceeds card height */}
    <Typography variant="h5">Recipe {index + 1}</Typography>
    <Typography variant="body1">Diet Type : </Typography>
    <Typography variant="body1">Flavor Type : </Typography>
    <Box sx={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Typography variant="body1">Protine :</Typography>
      <Typography variant="body1">Fiber :</Typography>
    </Box>
    <Box sx={{ display: 'flex', gap: 9, alignItems: 'center' }}>
      <Typography variant="body1">Carbs :</Typography>
      <Typography variant="body1">Fat :</Typography>
    </Box>
    <Typography variant="body1">Ingredients :</Typography>
    <Typography variant="body2">
      This is meal description. In publishing and graphic design, Loram ipsum is a placeholder text commonly used to
      demonstrate the visual form of a document or a typeface without relying on meaningful content...
    </Typography>
  </CardContent>
</Card>

  );

};

export default MealBox;
