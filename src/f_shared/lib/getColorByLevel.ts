export const getColorByLevel = (level: number) => {
    switch (level) {
        case 1:
            return "#2196d7"
        case 2:
            return "#A59A36"
        case 3:
            return "#c92525"
        default:
            console.log(level)
            return "#fff"
    }
}