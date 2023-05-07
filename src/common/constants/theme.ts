import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
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
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                            backgroundColor: '#366EFF',
                            color: '#fff',
                        }),
                }),
            },
        },
        // MuiSvgIcon: {
        //     styleOverrides: {
        //         root: {
        //             '&$checked': {
        //                 color: 'red',
        //             },
        //         },
        //     },
        // },
        // MuiCheckbox: {
        //     styleOverrides: {
        //         root: {
        //           secondary: {
        //                 color: '#custom color',
        //                 '&.Mui-checked': {
        //                     color: 'red',
        //                 },
        //             },
        //         },
        //     },
        // },
    },
})
