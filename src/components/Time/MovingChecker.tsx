import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface MovingCheckerProps {
  handleAnimation: (e: any) => void;
}
export function MovingChecker({ handleAnimation }: MovingCheckerProps) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="left-to-right"
      >
        <FormControlLabel
          onChange={e => handleAnimation(e)}
          value="left-to-right"
          control={<Radio />}
          label="left-to-right"
          defaultChecked
        />
        <FormControlLabel
          onChange={e => handleAnimation(e)}
          value="right-to-left"
          control={<Radio />}
          label="right-to-left"
        />
        <FormControlLabel
          onChange={e => handleAnimation(e)}
          value="top-to-bottom"
          control={<Radio />}
          label="top-to-bottom"
        />
        <FormControlLabel
          onChange={e => handleAnimation(e)}
          value="bottom-to-top"
          control={<Radio />}
          label="bottom-to-top"
        />
        <FormControlLabel
          onChange={e => handleAnimation(e)}
          value="round"
          control={<Radio />}
          label="round"
        />
      </RadioGroup>
    </FormControl>
  );
}
