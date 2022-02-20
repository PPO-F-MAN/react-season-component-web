import React from 'react';
import { Time } from 'react-season-component';
import { CodeBlock, dracula } from 'react-code-blocks';

import * as Styled from './styled';
import Controller from '../../components/Controller';

const CODE = `// using the atomOneDark theme
import { CodeBlock, nord} from 'react-code-blocks';
const MyCodeComponent = () => (
<CodeBlock
  text="HELLO WORLD"
  theme={nord}
  language="text"
/>
)`;

function TimePage() {
  return (
    <>
      <Controller>dd</Controller>
      <Styled.Container>
        <Styled.Title>Time</Styled.Title>
        <Styled.SubTitle>Preview</Styled.SubTitle>
        <Styled.Card>
          <Time type="night" animationRoundTime={1} animation="top-to-bottom" background />
        </Styled.Card>
        <Styled.SubTitle>Example Code</Styled.SubTitle>
        <Styled.CodeContainer>
          <CodeBlock text={CODE} theme={dracula} language="typescript" />
        </Styled.CodeContainer>
      </Styled.Container>
    </>
  );
}

export default TimePage;
