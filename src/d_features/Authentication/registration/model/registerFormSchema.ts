import {z} from 'zod'

export const registerFormSchema = z.object({
    email: z.string().min(1, {message: 'Email is required'}).email({
        message: 'Must be a valid email',
    }),
    username: z.string().min(1, {message: 'Username is required'}),
    password: z
        .string()
        .min(6, {message: 'Password must be atleast 6 characters'}),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
