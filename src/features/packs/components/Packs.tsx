import Box from '@mui/material/Box'

import { usePacksSelectors, useFetchPacks, usePacksActions } from 'features/packs/hooks'
import { PacksFilters, PacksTable } from 'features/packs/components'
import { SubHeader } from 'common/components'

export const Packs = () => {
    const { packsAreLoading } = usePacksSelectors()

    const { addPack } = usePacksActions()

    useFetchPacks()

    return (
        <Box>
            <Box sx={{ m: '40px 0' }}>
                <SubHeader
                    title={'Packs list'}
                    onClick={addPack}
                    buttonTitle="Add new pack"
                    disabled={packsAreLoading}
                />
            </Box>
            <PacksFilters>
                <PacksTable />
            </PacksFilters>
        </Box>
    )
}
