/* global $ */
// eslint-disable-next-line
import React from 'react';
import Players from './players';

export default function display(props) {
    return (
    <div className="parent">
        <div id="logo" className="container">
        <div></div>
        <h1><a className="icon icon-spinner"><span>2018 Yankee's Homerun Tracker</span></a></h1></div>
        <div id="page-wrapper">
            <div id="banner" className="container"><a><img src="arches.jpg" alt="" /></a></div>
            <div className="title">
                <h2>Home Run Leaders</h2>
            </div>
            <div className="container">
                <div className="box">
                </div>
                <div id="featured">
                <Players/>
                </div>
            </div>
        </div>
            <div id="footer-wrapper">
                <div id="footer" className="container">
                    <div id="fbox1">
                        <h2>Maecenas luctus</h2>
                        <p>Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum.</p>
                        <a className="button icon icon-arrow-right">Learn More</a> </div>
                    <div id="fbox2">
                        <h2>Integer gravida</h2>
                        <p>Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac mauris.</p>
                        <a className="button icon icon-arrow-right">Learn More</a> </div>
                    <div id="fbox3">
                        <h2>Praesent scelerisque</h2>
                        <p>Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper eleifend.</p>
                        <a className="button icon icon-arrow-right">Learn More</a> </div>
                    <div id="fbox4">
                        <h2>Etiam rhoncus volutpat</h2>
                        <p>Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper eleifend.</p>
                        <a className="button icon icon-arrow-right">Learn More</a> </div>
                </div>
            </div>
            <div id="copyright">
                <p>Copyright (c) 2018 Tom Haborak All rights reserved.</p>
            </div>
    </div>
    
            );
}
