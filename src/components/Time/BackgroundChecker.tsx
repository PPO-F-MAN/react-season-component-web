import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface BackgroundCheckerProps {
  handleBackground: (e: any) => void;
}
export function BackgroundChecker({ handleBackground }: BackgroundCheckerProps) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Background</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="true"
      >
        <FormControlLabel
          onChange={e => handleBackground(e)}
          value="true"
          control={<Radio />}
          label="true"
        />
        <FormControlLabel
          onChange={e => handleBackground(e)}
          value="false"
          control={<Radio />}
          label="false"
        />
      </RadioGroup>
    </FormControl>
  );
}
