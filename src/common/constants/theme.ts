import { createTheme } from '@mui/material'

export const theme = createTheme({
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: { fontFamily: 'Montserrat, sans-serif' },
                h1: {
                    fontSize: '26px',
                    fontWeight: 600,
                    lineHeight: '32px',
                    marginBottom: '30px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                            backgroundColor: '#366EFF',
                            color: '#fff',
                            borderRadius: '30px',
                            textTransform: 'capitalize',
                            fontSize: '16px',
                            lineHeight: '20px',
                            letterSpacing: '0.01em',
                            padding: '8px auto',
                            boxShadow:
                                '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                            fontFamily: 'Montserrat, sans-serif',
                        }),
                }),
            },
        },
    },
})
