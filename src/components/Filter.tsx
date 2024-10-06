import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField, Box, Grid, Typography, Divider, Slider } from '@mui/material';

interface FilterProps {
  onSearch: (term: string) => void;
  onMealtypeChange: (mealtype: string) => void;
  mealtypes: string[];
  onDiettypeChange: (diettype: string) => void;
  diettypes: string[];
}

const Filter: React.FC<FilterProps> = ({ onSearch, onMealtypeChange, mealtypes, onDiettypeChange, diettypes }) => {

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  const handleMealtypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onMealtypeChange(event.target.value);
  };
  const handleDiettypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDiettypeChange(event.target.value);
  };


  const [calories, setCalories] = useState<number[]>([0, 5000]);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setCalories(newValue as number[]);
  };
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(event.target.value);
    setCalories([newMin, calories[1]]);
  };
  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(event.target.value);
    setCalories([calories[0], newMax]);
  };


  return (
    <Box sx={{ padding: 2, border: '1px solid grey', borderRadius: '4px' }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        sx={{ marginBottom: 2 }}
      />
      <FormControl component="fieldset">
      <RadioGroup
          aria-label="mealtype"
          name="mealtype"
          defaultValue="" // "No Filter" (empty string)
          onChange={(event) => {
            handleMealtypeChange(event);  // Call handleMealtypeChange
            handleDiettypeChange(event);  // Call handleDiettypeChange
          }}
        >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControlLabel
              value=""
              control={<Radio />}
              label="No Filter"
            />
            <Divider sx={{ border: '1px solid grey',  }} />
            <Typography variant="h6" sx={{ marginY: 1 }}>Meal Type :</Typography>
          </Grid>
          {mealtypes.map((mealtype, index) => (
          <Grid item xs={6} key={mealtype} sx={{ padding: 0.5 }}> 
            <FormControlLabel
              value={mealtype}
              control={<Radio sx={{ padding: 0.25 }} />} 
              label={mealtype}
              sx={{ margin: 0 }} 
            />
          </Grid>
          ))}
            <Grid item xs={12}>
              <Divider sx={{ border: '1px solid grey',  }} />
              <Typography variant="h6" sx={{ marginY: 1 }}>Diet Type :</Typography>
          </Grid>
          {diettypes.map((diettype, index) => (
            <Grid item xs={6} key={diettype} sx={{ padding: 0.5 }}> 
            <FormControlLabel
              value={diettype}
              control={<Radio sx={{ padding: 0.25 }} />} 
              label={diettype}
              sx={{ margin: 0 }} 
            />
          </Grid>
          ))}
          <Grid item xs={12}>
            <Divider sx={{ border: '1px solid grey',  }} />
            <Typography variant="h6" sx={{ marginY: 1 }}>Calories Range :</Typography>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <TextField
              label="Min Calories"
              type="number"
              variant="outlined"
              value={calories[0]}
              onChange={handleMinChange}
              sx={{ marginRight: 1 }}
            />
            <TextField
              label="Max Calories"
              type="number"
              variant="outlined"
              value={calories[1]}
              onChange={handleMaxChange}
            />
          </Box>
          <Slider
            sx={{ marginBottom: 1, marginLeft: 1 }} // Moves slider left
            value={calories}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={10}
          />

        </Grid>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
