export function isFetchBaseQueryError(error){
    return typeof error === 'object' && error != null && 'message' in error
}
