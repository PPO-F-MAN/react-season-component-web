import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface PositionCheckerProps {
  handlePosition: (e: any) => void;
}
export function PositionChecker({ handlePosition }: PositionCheckerProps) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="left-top"
      >
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="left-top"
          control={<Radio />}
          label="left-top"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="left-center"
          control={<Radio />}
          label="left-center"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="left-bottom"
          control={<Radio />}
          label="left-bottom"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="center-top"
          control={<Radio />}
          label="center-top"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="center-center"
          control={<Radio />}
          label="center-center"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="center-bottom"
          control={<Radio />}
          label="center-bottom"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="right-top"
          control={<Radio />}
          label="right-top"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="right-center"
          control={<Radio />}
          label="right-center"
        />
        <FormControlLabel
          onChange={e => handlePosition(e)}
          value="right-bottom"
          control={<Radio />}
          label="right-bottom"
        />
      </RadioGroup>
    </FormControl>
  );
}
