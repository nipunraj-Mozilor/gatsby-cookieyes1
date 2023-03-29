const headComponents = [
  <script
    id='cookieyes'
    type='text/javascript'
    src='https://cdn-cookieyes.com/client_data/4a1165be30e4e56d0c6f7765/script.js'
  ></script>,
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};
