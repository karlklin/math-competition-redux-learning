import React from 'react';
import {Logo} from './Logo';
import {TotalResults} from './TotalResults';

export function Header() {

    return (
        <div className="header">
            <Logo/>
            <TotalResults/>
        </div>
    );
}