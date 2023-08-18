export type Session = {
    token: string
    user: User
}

// TODO: FSD: Move user to entities/user/model/types.ts
export type User = {
    id: number
    email: string,
    userName: string
}
