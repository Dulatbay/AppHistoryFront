export type ModuleId = Brand<Id, 'ModuleId'>
export type TopicId = Brand<Id, 'TopicId'>
export type Topic = {
    id: number
    title: string,
    number: number,
    content: string,
}

export type ModuleWithTopics = {
    id: number
    title: string,
    topics: Topic[]
}

