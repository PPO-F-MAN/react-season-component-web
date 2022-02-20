import React, { useCallback, useState } from 'react';
import { Season as SeasonComponent } from 'react-season-component';
import { Button, ButtonGroup } from '@mui/material';
import Controller from '../../components/Controller';
import { Container, ButtonWrapper, SeasonViewWrapper, CodeViewer } from './styled';

const TYPES = ['auto', 'spring', 'summer', 'autumn', 'winter'];

function SeasonPage() {
  type SeasonType = 'auto' | 'spring' | 'summer' | 'autumn' | 'winter';
  const [type, setType] = useState<SeasonType>('auto');

  const handleType = useCallback(
    (e: any) => {
      setType(e.target.textContent);
    },
    [type],
  );

  return (
    <Container>
      <SeasonViewWrapper>
        <SeasonComponent type={type}>{type}</SeasonComponent>
      </SeasonViewWrapper>
      <CodeViewer>
        <code>{`<SeasonComponent type=${type}></SeasonComponent>`}</code>
      </CodeViewer>
      <Controller type="season">
        <ButtonWrapper>
          <h1>Custom Variables</h1>
          <p>Season Component</p>
          <ButtonGroup size="small" color="inherit" aria-label="outlined primary button group">
            {TYPES.map(type => (
              <Button key={type} onClick={handleType}>
                {type}
              </Button>
            ))}
          </ButtonGroup>
        </ButtonWrapper>
      </Controller>
    </Container>
  );
}

export default SeasonPage;
