import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface TypeCheckerProps {
  handleType: (e: any) => void;
}
export function TypeChecker({ handleType }: TypeCheckerProps) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="auto"
      >
        <FormControlLabel
          onChange={e => handleType(e)}
          value="auto"
          control={<Radio />}
          label="auto"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="spring"
          control={<Radio />}
          label="spring"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="summer"
          control={<Radio />}
          label="summer"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="autumn"
          control={<Radio />}
          label="autumn"
        />
        <FormControlLabel
          onChange={e => handleType(e)}
          value="winter"
          control={<Radio />}
          label="winter"
        />
      </RadioGroup>
    </FormControl>
  );
}
