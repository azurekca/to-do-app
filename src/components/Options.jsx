import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const hues = (step) => {
  const hues = [];

  for (let i = 0; i < 360; i += step) {
    hues.push(i);
  }

  return hues;
};

export default function Options({ setHue }) {
  const hueList = useRef(hues(40));
  return (
    <OptionsWrapper>
      {hueList.current.map((color) => (
        <ColorOption color={color} onClick={() => setHue(color)} />
      ))}
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ColorOption = styled.button`
  background-color: ${({ color }) => `hsl(${color} var(--saturation) 50%)`};
  border: none;
  border-radius: 4px;
  height: 32px;
  width: 32px;
  :hover {
    background-color: ${({ color }) => `hsl(${color} var(--saturation) 65%)`};
  }
`;
