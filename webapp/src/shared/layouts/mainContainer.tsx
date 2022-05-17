import style from 'styled-components';

const drawerWidth = 240;

const MainContainer = style.main`
    width: 100vw ${-drawerWidth};
    height: 100vh;
`;

export default MainContainer;