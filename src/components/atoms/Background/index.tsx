import { BackgroundGrid } from "./Background.styles"

function Background({ color, backgroundURL, children }) {
    return (
        <BackgroundGrid
            pt={2}
            pb={4}
            color={color}
            backgroundURL={backgroundURL}>
                {children}
        </BackgroundGrid>
    )
}

export default Background;