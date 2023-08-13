import {mapUser} from "./mapUser";

export function mapSession(dto) {
  return {
    accessToken: dto.accessToken,
    user: mapUser(dto),
  }
}
