import styled from '@emotion/styled/macro';
import { Global } from '@emotion/react';

export const Input = styled.input`
  height: 2rem;
  width: 100%;
`;

export const TaskList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export const TaskItem = styled.li`
  
`;

// ref: https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
export const VisuallyHidden = styled.span`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1;
  width: 1;
  margin: -1;
  padding: 0;
  border: 0;
`;

