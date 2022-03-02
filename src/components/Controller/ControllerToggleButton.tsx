import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ToggleButton from '@mui/material/ToggleButton';
import styled from '@emotion/styled';

interface ControllerToggleButtonProps {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

function ControllerToggleButton({ visibility, setVisibility }: ControllerToggleButtonProps) {
  return (
    <StyledToggleButton
      value="check"
      selected={visibility}
      onChange={() => {
        setVisibility(!visibility);
      }}
    >
      <span>Show Controller</span>
      <VisibilityIcon />
    </StyledToggleButton>
  );
}

const StyledToggleButton = styled(ToggleButton)`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

export default ControllerToggleButton;
