import { createTheme } from '@mui/material'

// declare module '@mui/material/Button' {
//     interface ButtonPropsVariantOverrides {
//         radius: true
//     }
// }

export const theme = createTheme({
    // palette: {
    //     primary: {
    //         main: '#366EFF',
    //     },
    // },
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
                root: {
                    fontFamily: 'Montserrat, sans-serif',
                },
                h1: {
                    fontSize: '26px',
                    fontWeight: 600,
                    marginBottom: '30px',
                    lineHeight: '32px',
                },
                h2: {
                    fontSize: '22px',
                    fontWeight: 600,
                    marginBottom: '30px',
                    lineHeight: '27px',
                },
                h3: {
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    textAlign: 'center',
                },
                body1: {
                    fontWeight: 600,
                    marginTop: 31,
                    opacity: 0.6,
                    fontSize: '14px',
                    lineHeight: '24px',
                },
                body2: {
                    fontWeight: 500,
                    marginTop: 14,
                    opacity: 0.6,
                    fontSize: '14px',
                    lineHeight: '24px',
                },
            },
        },

        MuiButton: {
            variants: [
                {
                    props: { color: 'secondary' },
                    style: {
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        borderRadius: '2px',
                        paddingTop: 0,
                        paddingBottom: 0,
                        '&:hover': {
                            backgroundColor: '#1565c0',
                        },
                    },
                },
                {
                    props: { color: 'primary' },
                    style: {
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        textTransform: 'none',
                        borderRadius: '30px',
                        fontSize: '16px',
                        lineHeight: '20px',
                        letterSpacing: '0.01em',
                        boxShadow: '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                    },
                },
                // {
                //     props: { variant: 'radius' },
                //     style: {
                //         borderRadius: 30,
                //     },
                // },
            ],
            styleOverrides: {
                root: ({ ownerState }) => ({
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: '#366EFF',
                    // padding: '0',

                    // ...(ownerState.variant === 'contained' &&
                    //     ownerState.color === 'primary' && {
                    //         textTransform: 'none',
                    //         borderRadius: '30px',
                    //         fontSize: '16px',
                    //         lineHeight: '20px',
                    //         letterSpacing: '0.01em',
                    //         boxShadow:
                    //             '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                    //     }),
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Montserrat, sans-serif',
                },
            },
        },
    },
})
