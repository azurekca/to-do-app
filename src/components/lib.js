import styled from '@emotion/styled/macro';

export const MainWrapper = styled.div`
  margin: 0 auto 1rem;
  max-width: 60ch;
  /** Clever helper snippets by Stephanie Eckles https://smolcss.dev/ */
  padding: 5vh var(--fluid-padding) 2vh;
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  border: none;
  line-height: 0;
  padding: 0;
  width: 32px;
  height: 32px;
`;

export const Checkbox = styled.input`
  accent-color: var(--primary-color);
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  border: none;
  box-shadow: var(--shadow-elevation-medium);
  padding: 0 4px;
`;

export const Label = styled.label`
  font-size: var(--fluid-body);
`;

export const TaskList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 0;
`;

export const TaskItem = styled.li`
  box-shadow: var(--shadow-elevation-medium);
  margin-bottom: 4px;
  .done label {
    text-decoration: line-through;
  }
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
