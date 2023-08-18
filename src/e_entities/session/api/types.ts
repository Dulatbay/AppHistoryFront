export type SessionDto = {
    token: string
    user: {
        userName: string,
        email: string
        id: number
    }
}

export type RequestLoginBody = {
    email: string
    password: string
}

export type UserDto = {
    id: number
    email: string,
    userName: string,
}

export interface RequestRegisterBody {
    email: string
    username: string
    password: string
}