import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'

import { CardPackType } from 'features/packs/packs.api'
import { usePacksActions } from 'features/packs/hooks'
import { useAuthSelectors } from 'features/auth/hooks'
import { FC } from 'react'

type PropsType = {
    pack: CardPackType
}

export const PacksActions: FC<PropsType> = ({ pack }) => {
    const { profileId } = useAuthSelectors()

    const { goToLearn, updatePack, deletePack } = usePacksActions()

    return (
        <>
            <IconButton size="small" disabled={pack.cardsCount === 0} onClick={() => goToLearn(pack._id)}>
                <SchoolOutlinedIcon fontSize="small" />
            </IconButton>
            {pack.user_id === profileId && (
                <>
                    <IconButton onClick={() => updatePack(pack._id, pack.name, pack.private)} size="small">
                        <BorderColorOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => deletePack(pack._id, pack.name, 'packs')} size="small">
                        <DeleteOutlinedIcon fontSize="small" />
                    </IconButton>
                </>
            )}
        </>
    )
}
