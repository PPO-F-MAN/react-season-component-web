import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { Controller, Sidebar } from '../../components';
import { Container, Title, SubTitle, Content, CodeContainer } from './styled';

function Home() {
  const CODE = `npm install --save react-season-component`;
  return (
    <>
      <Sidebar type="home" currentPage="Home" />
      <Controller type="home" />
      <Container>
        <Title>React Season Component</Title>
        <Content>날씨, 계절, 시간에 따른 아름다운 효과를 주고싶을 때 사용해보세요.</Content>
        <SubTitle>Getting started</SubTitle>
        <CodeContainer>
          <CodeBlock theme={dracula} text={CODE} language="bash" showLineNumbers={false} />
        </CodeContainer>
      </Container>
    </>
  );
}

export default Home;
