import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { SearchInput } from 'common/components/inputs/SearchInput'
import { PacksPagination } from './PacksPagination'
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useAppSelector } from '../../../common/hooks'
import { CardsCountSlider } from './CardsCountSlider'

type PacksFilterPropsType = {
    children: React.ReactNode
}

export const PacksFilters: React.FC<PacksFilterPropsType> = ({ children }) => {

    return (
        <Grid container alignItems={'flex-end'} /* style={{ border: '1px solid green' }} */>
            <Grid item md={5}>
                <Box /* style={{ border: '1px solid' }} */>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Search
                    </Typography>
                    <SearchInput />
                </Box>
            </Grid>
            <Grid item md={3} justifyContent={'center'} display={'flex'}>
                <Box /* style={{ border: '1px solid' }} */>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Show packs cards
                    </Typography>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button sx={{ borderRadius: 0, backgroundColor: 'white', width: '100px' }}>My</Button>
                        <Button sx={{ borderRadius: 0, backgroundColor: 'white', width: '100px' }}>All</Button>
                    </ButtonGroup>
                </Box>
            </Grid>
            <Grid item md={3} justifyContent={'center'} display={'flex'}>
                <Box /* style={{ border: '1px solid' }}  */>
                    <Typography variant="h5" sx={{ mb: '8px' }}>
                        Number of cards
                    </Typography>
                    <CardsCountSlider />
                </Box>
            </Grid>
            <Grid item md={1} justifyContent={'flex-end'} display={'flex'}>
                <Box /* style={{ border: '1px solid' }} */>
                    <IconButton
                    //   disabled={disabled}
                    //   onClick={onClick}
                    //   sx={{ backgroundColor: '#fff', border: ' 1px solid #E8E8E8', borderRadius: '2px' }}
                    >
                        <FilterAltOffOutlinedIcon />
                    </IconButton>
                </Box>
            </Grid>
            {children}
            <PacksPagination />
        </Grid>
    )
}
