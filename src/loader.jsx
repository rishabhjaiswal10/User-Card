import React from 'react'
import './loader.css';
function Loading(props) {
    return (
        <>
            <div class="loader">
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__bar"></div>
            <div class="loader__ball"></div>
            </div>
        </>
    );
};

export default Loading;