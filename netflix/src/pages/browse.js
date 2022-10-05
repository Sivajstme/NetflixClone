import React from 'react';

import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../containers/browse';
export default function Browse(){

    const {series} = useContent('series');
    const {films} = useContent('films');
    // console.log(series);
    //Need to show the series and the films
    // we need to show Slides Main screen
    const slides = selectionFilter({series, films});
    //

    // console.log(slides);
    return <BrowseContainer slides= {slides} />
}
