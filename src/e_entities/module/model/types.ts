export type Module = {
    id: number
    title: string,
    description: string,
    minutes: number,
    number: number,
    topicsCount: number,
    imageUrl: string,
    questionsCount: number,
    passedUsersCount: number,
    level: number,
}

export type ModuleTitle = {
    id: number,
    title: string,
    topics: Array<TopicTitle>
}

export type TopicTitle = {
    id: number,
    title: string
}

export type ModuleId = Brand<Id, 'ProductId'>
