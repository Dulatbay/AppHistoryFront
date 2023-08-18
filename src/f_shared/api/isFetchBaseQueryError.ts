export function isFetchBaseQueryError(error: any) {
    return error != null && typeof error === 'object' && 'status' in error && 'data' in error && error["data"] && error["data"].message
}
