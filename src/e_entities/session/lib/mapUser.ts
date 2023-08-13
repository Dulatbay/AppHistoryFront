export function mapUser(dto) {
  return {
    id: dto.id,
    email: dto.email,
    username: dto.username,
  }
}
