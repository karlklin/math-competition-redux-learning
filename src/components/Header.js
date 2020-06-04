import React from 'react';
import {Logo} from './Logo';
import {TotalResults} from './TotalResults';

export function Header({ answerState }) {

    return (
        <div className="header">
            <Logo/>
            <TotalResults answerState={answerState}/>
        </div>
    );
}