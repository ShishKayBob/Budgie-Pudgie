'use client'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../../app/theme'

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default NextThemeProvider