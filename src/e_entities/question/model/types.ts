export interface Variant {
    id?: number,
    content: string
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