import { Box, styled } from "@mui/material";

export const ArrowBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    background: theme.palette.background.default,
    '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '29px 29px 0 29px',
        borderColor: `${theme.palette.background.default} transparent transparent transparent`,
        left: '50%',
        transform: 'translateX(-50%) translateY(100%)',
      },
}));