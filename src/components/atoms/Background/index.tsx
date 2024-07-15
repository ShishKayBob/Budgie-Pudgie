import { BackgroundGrid } from "./Background.styles"

function Background({ children }) {
    return (
        <BackgroundGrid
            pt={2}
            pb={4}>
                {children}
        </BackgroundGrid>
    )
}

export default Background;