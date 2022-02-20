import React, { useCallback, useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { Season } from 'react-season-component';
import { Button, ButtonGroup } from '@mui/material';
import Controller from '../../components/Controller';
import { Container, ButtonWrapper, SeasonViewWrapper, CodeContainer } from './styled';

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

  const CODE = `<SeasonComponent type=${type}></SeasonComponent>`;

  return (
    <Container>
      <SeasonViewWrapper>
        <Season type={type} />
      </SeasonViewWrapper>
      <CodeContainer>
        <CodeBlock text={CODE} theme={dracula} language="typescript" />
      </CodeContainer>
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
