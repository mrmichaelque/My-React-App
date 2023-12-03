import React from 'react';
import styled from 'styled-components';

// Define your Button component here
function Button() {
  // Component logic goes here
}

const OverlayandNavigationBar: React.VFC = () => {
  return (
    <div>
      <Property1Default>
        <text1>button-name</text1>
      </Property1Default>
      <Property1Variant2>
        <text2>button-name</text2>
      </Property1Variant2>
      <Property1Variant3>
        <text3>button-name</text3>
      </Property1Variant3>
    </div>
  );
};

const Property1Default = styled.div`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 10px 10px;
  gap: 10px;
  background-color: #6a7da6;
`;

const text1 = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 24px;
  font-family: 'Noto Sans';
  line-height: auto;
  color: #ffffff;
`;

const Property1Variant2 = styled.div`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 10px 10px;
  gap: 10px;
  background-color: #9747ff;
`;

const text2 = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 24px;
  font-family: 'Noto Sans';
  line-height: auto;
  color: #ffffff;
`;

const Property1Variant3 = styled.div`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 10px 10px;
  gap: 10px;
  background-color: #674779;
`;

const text3 = styled.div`
  text-align: center;
  vertical-align: top;
  font-
