import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import options from '../icons/options.svg';

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
      <OptionsIcon src={options} alt='options' />
      {hueList.current.map((color, index) => (
        <ColorOption key={index} color={color} onClick={() => setHue(color)} />
      ))}
    </OptionsWrapper>
  );
}

Options.propTypes = {
  setHue: PropTypes.func.isRequired
};

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// todo, use a proper svg so the color can get updated
const OptionsIcon = styled.img`
  width: 32px;
  height: 32px;
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
