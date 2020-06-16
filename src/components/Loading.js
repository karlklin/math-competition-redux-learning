import React from 'react';

export const Loading = ({loading}) => {
    const isLoading = loading.length > 0;
    return isLoading ? <div className="loading">Loading...</div> : null;
};