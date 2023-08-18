import {Question} from "@/e_entities/question";

// TODO: желательно так не использовать, ведь модули на одном уровне

export interface QuizPostDto {
    title: string,
    description?: string | null,
    questions: Array<Question>,
    level: number,
    isVerified: false
}