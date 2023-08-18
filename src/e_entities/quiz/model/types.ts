// TODO: копи паст, потому что нельзя использовать сущности которые лежат на одном уровне

export interface Author {
    id: number,
    username: string
}

export interface Question {
    id?: number,
    questionText: string,
    level: number,
    correctVariantIndex: number,
    variants: Variant[],
    topicId: number,
    topicTitle: string
}

export interface Variant {
    id?: number,
    content: string
}

export interface QuizDetail {
    id: number,
    title: string,
    description: string,
    questions: Question[],
    averageResult: number,
    authorDto: Author,
    imageUrl: "",
}

export interface Quiz {
    id: number,
    title: string,
    userPercent: number,
    passedUsersCount: number,
    questionsCount: number,
    imageUrl: string,
    level: number,
    isVerified: false
}