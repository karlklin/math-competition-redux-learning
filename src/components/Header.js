import React from 'react';
import {Logo} from './Logo';
import {TotalResults} from './TotalResults';

export const Header = ({ answers }) => {

    return (
        <div className="header">
            <Logo/>
            <TotalResults answers={answers}/>
        </div>
    );
}