export type ActionPropTypes = {
    handlePrev: () => void,
    handleNext: () => void,
    start: number,
    end: number,
    total: number
}

export type DisplayPropTypes = {
    start: number,
    end: number,
    total: number,
    handleChange: (val: number) => void,
    pageSize: number
}

export type PaginationTypes =  {
    currentPage: number,
    pageSize: number,
    total: number,
    fetchData: (currentPage: number, pageSize: number) => void
}