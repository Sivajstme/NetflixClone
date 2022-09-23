import React from 'react';

import { useContent } from '../hooks';

export default function Browse(){

    const {series} = useContent('series');
    console.log(series);
    //Need to show the series and the films
    // we need to show Slides Main screen
    //
    return <p>Hello from Browse</p>
}