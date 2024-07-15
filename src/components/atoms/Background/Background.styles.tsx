import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BackgroundGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: '100%',
    zIndex: 0,
}))