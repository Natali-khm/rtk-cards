import Box from '@mui/material/Box'

import { usePacksSelectors, useFetchPacks } from 'features/packs/hooks'
import { PacksFilters, PacksTable } from 'features/packs/components'
import { packsThunks } from 'features/packs/packs.slice'
import { SubHeader } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { toast } from 'react-toastify'

export const Packs = () => {
    const { packsAreLoading } = usePacksSelectors()
    const dispatch = useAppDispatch()

    useFetchPacks()

    const addNewPack = () => {
        const name = 'new card4'
        dispatch(packsThunks.addPack({ name }))
            .unwrap()
            .then((res) => {
                toast.success(`'${name}' pack is created`)
            })
    }

    return (
        <Box>
            <Box sx={{ m: '40px 0' }}>
                <SubHeader
                    showBtn={true}
                    title={'Packs list'}
                    onClick={addNewPack}
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
