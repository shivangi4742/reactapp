import React, { useMemo, useState, useCallback, useEffect} from "react";
import Actions from "./actions";
import Display from "./display";
import { PaginationTypes } from "./pagination.typings";
import { Grid } from "@material-ui/core";

const Pagination = ({ currentPage, total, pageSize, fetchData }: PaginationTypes) => {

    const handleDropdownChange = useCallback(
        (value: number) => {
            fetchData(currentPage, value);
        },
        []
    );

    const handlePrev = useCallback(
        () => {
            fetchData(currentPage - 1, pageSize);
        },
        []
    );

    const handleNext = useCallback(
        () => {
            fetchData(currentPage + 1, pageSize);
        },
        []
    );

    const offSet = useMemo(() => (currentPage - 1) * pageSize, [currentPage, pageSize]);
    const start = useMemo(() => offSet + 1, [offSet]);
    const end = useMemo(() => offSet + pageSize, [offSet, pageSize]);
    // const totalPages = useMemo(() => Math.ceil(total / pageSize), [offSet, pageSize]);

    
        return (
            <Grid container spacing={24}>
                <Grid item sm={6}>
                </Grid>
                <Grid item sm={6}>
                    <Grid container spacing={24}>
                        <Grid item sm={9}>
                            <Display
                                start={start}
                                end={end}
                                total={total}
                                handleChange={handleDropdownChange}
                                pageSize={pageSize}
                            />
                        </Grid>
                        <Grid item sm={3}>
                            <Actions
                                handlePrev={handlePrev}
                                handleNext={handleNext}
                                start={start}
                                end={end}
                                total={total}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
};

export default Pagination;