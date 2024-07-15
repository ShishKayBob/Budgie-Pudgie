'use client'

import Background from "@/components/atoms/Background";
import Hero from "@/components/atoms/Hero";
import { Container, Grid } from "@mui/material";
import * as Image from '../../../../public/BUDGIE-PUDGIE.png';

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
    </Grid>
}

export default LandingPage;