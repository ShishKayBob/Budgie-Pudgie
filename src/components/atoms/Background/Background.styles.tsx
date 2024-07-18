import { Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledBackgroundGrid extends GridProps {
    color?: string;
    backgroundURL?: string;
}

export const BackgroundGrid = styled(Grid, {
    shouldForwardProp: (prop) => true,
})<StyledBackgroundGrid>(({ color, backgroundURL, theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: '100%',
    zIndex: 0,
    ...(color && {
        backgroundColor: color
    }),
    ...(backgroundURL && {
        backgroundImage: `url(${backgroundURL})`
    }),
}))