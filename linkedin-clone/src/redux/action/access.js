export const GET_ACCESS= 'GET_ACCESS';

export const getUserAccess = (accessKey, yourID ) => ({
type : GET_ACCESS,
payload: {
    key: accessKey,
    id: yourID,
}

});