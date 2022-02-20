import React, { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { Season } from 'react-season-component';
import Controller from '../../components/Controller';
import * as Styled from './styled';
import { Sidebar } from '../../components';
import { TypeChecker } from '../../components/Season';

function SeasonPage() {
  type SeasonType = 'auto' | 'spring' | 'summer' | 'autumn' | 'winter';
  const [type, setType] = useState<SeasonType>('auto');

  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(360);

  const CODE = `import { Season } from 'react-season-component';
import styled from 'styled-components';

const Card = styled.div\`
  width: ${width}px;
  height: ${height}px;
\`

const MyComponent = () => {
  return (
    <Card>
      <Season type="${type}" />
    </Card>
  );
}
`;

  const handleType = (e: any) => {
    setType(e.target.value);
  };

  const handleWidth = (e: any) => {
    setWidth(e.target.value);
  };

  const handleHeight = (e: any) => {
    setHeight(e.target.value);
  };

  return (
    <>
      <Sidebar type={type} />
      <Controller
        type={type}
        width={width}
        height={height}
        onChangeWidth={handleWidth}
        onChangeHeight={handleHeight}
      >
        <TypeChecker handleType={handleType} />
      </Controller>

      <Styled.Container>
        <Styled.Title>Season</Styled.Title>
        <Styled.SubTitle>Preview</Styled.SubTitle>
        <Styled.Card width={width} height={height}>
          <Season type={type} />
        </Styled.Card>
        <Styled.SubTitle>Example Code</Styled.SubTitle>
        <Styled.CodeContainer>
          <CodeBlock theme={dracula} text={CODE} language="jsx" />
        </Styled.CodeContainer>
      </Styled.Container>
    </>
  );
}

export default SeasonPage;
