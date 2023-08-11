import Box from '@mui/material/Box'

import { usePacksSelectors, useFetchPacks } from 'features/packs/hooks'
import { PacksFilters, PacksTable } from 'features/packs/components'
import { SubHeader } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { modalActions } from '../../modals/modals.slice'

export const Packs = () => {
    const { packsAreLoading } = usePacksSelectors()
    const dispatch = useAppDispatch()

    useFetchPacks()

    const addPack = () => {
        dispatch(modalActions.openModal())
        dispatch(modalActions.setModal({ modalAction: 'Add New Pack', data: {} }))
    }

    return (
        <Box>
            <Box sx={{ m: '40px 0' }}>
                <SubHeader
                    // showBtn={true}
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
