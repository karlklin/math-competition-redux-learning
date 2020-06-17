import React from 'react';
import {observer} from "mobx-react";

export const Loading = observer(({loading}) => {
    const isLoading = loading.length > 0;
    return isLoading ? <div className="loading">Loading...</div> : null;
});