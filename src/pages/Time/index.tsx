import React, { useState } from 'react';
import { Time } from 'react-season-component';
import { CodeBlock, dracula } from 'react-code-blocks';

import * as Styled from './styled';
import Controller from '../../components/Controller';

function TimePage() {
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(360);

  const CODE = `import { Time } from 'react-season-component';
import styled from 'styled-components';

const Card = styled.div\`
  width: ${width}px;
  height: ${height}px;
\`

const MyComponent = () => {
  return (
     <Card>
       <Time
         type="night"
         animation="top-to-bottom"
         animationRoundTime={5}
         background
       />
     </Card>
  );
}
`;

  return (
    <>
      <Controller type="time">
        <div />
      </Controller>

      <Styled.Container>
        <Styled.Title>Time</Styled.Title>
        <Styled.SubTitle>Preview</Styled.SubTitle>
        <Styled.Card width={width} height={height}>
          <Time type="night" animation="top-to-bottom" animationRoundTime={5} background />
        </Styled.Card>
        <Styled.SubTitle>Example Code</Styled.SubTitle>
        <Styled.CodeContainer>
          <CodeBlock theme={dracula} text={CODE} language="jsx" />
        </Styled.CodeContainer>
      </Styled.Container>
    </>
  );
}

export default TimePage;
