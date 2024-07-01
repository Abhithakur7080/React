import React from 'react';
import { renderPresentation } from 'react-present';
import { Slide, Title } from 'react-present/components/content';
import CodeBlock from 'react-present/components/CodeBlock';
import './my-slide-styles.css';

const imgSrc = "https://giphy.com/clips/bike-hipster-singlespeed-txU1xgMQSeItk5iSc7"

const block = (
  <CodeBlock>
    const foo = 'bar';
  </CodeBlock>
);

const App = () => {
  return renderPresentation({
    title: 'Example Presentation',
    align: 'top',
    slides: [
      <Slide key="1">
        <Title>Use pre-built components like "Title"</Title>
      </Slide>,
      <Slide key="2">
        <p>Use standard HTML components</p>
      </Slide>,
      <Slide key="3">
        <Title>Include an image</Title>
        <img src={imgSrc} alt="image" />
      </Slide>,
      <Slide key="4">
        <Title>Include a Code Block</Title>
        {block}
      </Slide>
    ]
  });
};

export default App;
