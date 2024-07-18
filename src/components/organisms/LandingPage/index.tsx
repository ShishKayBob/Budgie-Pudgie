'use client'

import Background from "@/components/atoms/Background";
import Hero from "@/components/atoms/Hero";
import { Container, Grid, Typography } from "@mui/material";
import * as Image from '../../../../public/BUDGIE-PUDGIE.png';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const LandingPage = () => {
    return <Grid>
        <Hero
            title={'Take control of your finances.'}
            subtitle={'No matter the circumstance.'}
            body={''}
            image={Image}
            imageWidth={800}
            imageHeight={135}
            imageAltText={'Budgie Pudgie Logo'}
            buttonText={'Get Started'}
            buttonHref={undefined}>
        </Hero>
        <Background
            color="" backgroundURL="/moneybg.jpg">
            <Container maxWidth='md'>
                <Grid container sx={{ pb: 2.6, pt: 3.4 }}>
                    <Grid item xs={6}>
                        <Typography variant='h3' component='h1'>
                            You shouln't have to pay for help with your financial goals.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <CurrencyExchangeIcon color="secondary" sx={{ fontSize: '15rem'}} />
                    </Grid>
                </Grid>
            </Container>
        </Background>
    </Grid>
}

export default LandingPage;