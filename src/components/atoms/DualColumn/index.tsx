import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { theme } from "@/app/theme";

function DualColumn({
    text,
    icon
}) {
    return (
            <Container maxWidth='md'>
                <Grid container>
                    {icon && (
                        <Grid item xs={12} sx={{ pb: 2.6, pt: 3.4 }}>
                            <CurrencyExchangeIcon color="primary" />
                        </Grid>
                    )}
                    <Grid item >
                        <Typography variant='h3' component='h1'>{text}</Typography>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default DualColumn;