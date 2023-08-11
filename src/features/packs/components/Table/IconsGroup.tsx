import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'

import { CardPackType } from '../../packs.api'
import { usePackActions } from '../../hooks/usePackActions'
import { FC } from 'react'
import { useAuthSelectors } from '../../../auth/hooks'

type PropsType = {
    pack: CardPackType
}

export const IconsGroup: FC<PropsType> = ({ pack }) => {

    const { profileId } = useAuthSelectors()

    const { navigateToLearn, updatePack, deletePack } = usePackActions()


    return (
        <>
            <IconButton size="small" disabled={pack.cardsCount === 0} onClick={() => navigateToLearn(pack._id)}>
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
