export const formatDate = (date: string) => {
    let formatter = new Intl.DateTimeFormat('ru')
    let newDate = new Date(date)
    return formatter.format(newDate)
}
