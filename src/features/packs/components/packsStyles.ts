export const valuesStyle = {
    backgroundColor: 'white',
    maxWidth: '64px',
    input: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        lineHeight: '24px',
        textAlign: 'center',
    },
}

export const nameCellSX = {
    width: '260px',
    maxWidth: '260px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '21px 16px',
    '&:hover': { color: '#0c4ff7', fontWeight: 'bold', cursor: 'pointer' },
}

export const tableHeadSX = {
    width: '210px',
    cursor: 'pointer',
    backgroundColor: '#EFEFEF',
    '&:first-of-type': { width: '260px', maxWidth: '260px', overflow: 'hidden', textOverflow: 'ellipsis' },
    '&:last-of-type': { maxWidth: '150px', paddingLeft: '25px' },
}
