import Box from '@mui/material/Box'

import { usePacksSelectors, useFetchPacks } from 'features/packs/hooks'
import { PacksFilters, PacksTable } from 'features/packs/components'
import { packsThunks } from 'features/packs/packs.slice'
import { SubHeader } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { toast } from 'react-toastify'
import { modalActions } from '../../modals/modals.slice'

export const Packs = () => {
    const { packsAreLoading } = usePacksSelectors()
    const dispatch = useAppDispatch()

    useFetchPacks()

    const addNewPack = () => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ title: 'Add New Pack', data: '' }))
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
