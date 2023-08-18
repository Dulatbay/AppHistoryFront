import {type SessionDto} from '../api/types'
import {type Session} from '../model/types'

export function mapSession(dto: SessionDto): Session {
    return {
        token: dto.token,
        user: dto.user,
    }
}
