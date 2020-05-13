import React from 'react';

export const Loading = isLoading => {
    return isLoading ? <div className="loading">Loading...</div> : null;
};