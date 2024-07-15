import { Button, Container, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import { ArrowBox } from "./Hero.styles";

function Hero({
    title,
    subtitle,
    body,
    image,
    buttonText,
    buttonHref,
    imageWidth,
    imageHeight,
    imageAltText
}) {
    return (
        <ArrowBox component='section' sx={{ pb: 4 }}>
            <Container maxWidth='md'>
                <Grid container>
                    {image && (
                        <Grid item xs={12} sx={{ pb: 2.6, pt: 3.4, textAlign: 'center' }}>
                            <Image src={image} width={imageWidth} height={imageHeight} alt={imageAltText} />
                        </Grid>
                    )}
                    <Grid item container>
                        <Grid item sx={{ pb: 2.6, pt: 3.4 }}>
                            <Typography variant='h3' component='h1' sx={{ fontWeight: 300 }}>{title}</Typography>
                        </Grid>
                        <Grid item sx={{ pb: 2.6,}}>
                            <Typography variant='h5' component='h2'>{subtitle}</Typography>
                        </Grid>
                        <Grid item sx={{ pb: 4.4 }}>
                            <Typography component='p'>{body}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ pb: 1 }}>
                            <Button href={buttonHref} variant='contained'>{buttonText}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ArrowBox>
    )
}

export default Hero;