export type StatesType = {
    passedHistoryPercent: number,
    passedQuizzes: number,
    participatedTournaments: number,
    firstPlace: number,
    secondPlace: number,
    thirdPlace: number,
    friendsCount: number,
    shockDay: number,
    correctAnswers: number,
    incorrectAnswers: number
}
export type UserCardType = {
    id: number,
    email: string,
    username: string,
    states: StatesType
}
export type Author = {
    id: number,
    username: string
}

export type ShockDayType = {
    shockDay: number,
    lastPlay: string | undefined
}