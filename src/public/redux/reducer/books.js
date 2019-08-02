const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
    jumlah: 0
}

export default (books = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOOK_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isError: false
            }
        case "GET_BOOK_REJECTED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: false,
                isError: true
            }
        case "GET_BOOK_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isError: false,
                data: action.payload.data.result,
                jumlah: action.payload.data.jumlah
            }
        default:
            return state
    }
})
