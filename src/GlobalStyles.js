import { Global, css } from '@emotion/react';

export default function GlobalSyles() {
  return <Global styles={styles} />
}

const styles = css`
  /* CSS Reset by Josh Comeau  https://www.joshwcomeau.com/css/custom-css-reset/ */
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
  
  :root {
    --hue: 200deg;
    --saturation: 36%;
    --primary-hsl: var(--hue) var(--saturation) 50%;
    --primary-color: hsl(var(--primary-hsl));
 
    /* Fancy shadows generated with Josh Comeau's shadow tool https://www.joshwcomeau.com/shadow-palette/ */
   --shadow-elevation-low:
    0.3px 0.5px 0.7px hsl(var(--primary-hsl) / 0.24),
    0.4px 0.8px 1px -1.2px hsl(var(--primary-hsl) / 0.24),
    0.9px 1.7px 2.2px -2.5px hsl(var(--primary-hsl) / 0.24);
  --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--primary-hsl) / 0.25),
    0.7px 1.5px 1.9px -0.8px hsl(var(--primary-hsl) / 0.25),
    1.8px 3.5px 4.4px -1.7px hsl(var(--primary-hsl) / 0.25),
    4.3px 8.5px 10.7px -2.5px hsl(var(--primary-hsl) / 0.25);
  --shadow-elevation-high:
    0.3px 0.5px 0.7px hsl(var(--primary-hsl) / 0.23),
    1.1px 2.2px 2.8px -0.4px hsl(var(--primary-hsl) / 0.23),
    2px 3.9px 4.9px -0.7px hsl(var(--primary-hsl) / 0.23),
    3.2px 6.4px 8px -1.1px hsl(var(--primary-hsl) / 0.23),
    5.1px 10.1px 12.7px -1.4px hsl(var(--primary-hsl) / 0.23),
    7.9px 15.7px 19.8px -1.8px hsl(var(--primary-hsl) / 0.23);
}
  
  /* Global Styles */
  body {
    background-color: hsl(var(--primary-hsl) / 0.1);
    font-family: sans-serif;
  }
  
  input, button {
    outline-color: var(--primary-color);
  }
`;
