import React from 'react';
import {centerArea, centerAreaContent, typewriterOne, typewriterTwo, typewriterThree} from './about.module.css'
import {leftArea, leftAreaItem, layout} from './index.module.css'
import Seo from "../components/seo";

export function LeftArea() {
    return (
        <div className={leftArea}>
            <div className={leftAreaItem}>
                <a href={"/about"}>About</a>
            </div>
            <div className={leftAreaItem}>
                <a href={"/blogs"}>Blogs</a>
            </div>
            <div className={leftAreaItem}>
                <a href={"/about"}>Categories</a>
            </div>
            <div className={leftAreaItem}>
                <a href={"/about"}>Tags</a>
            </div>
        </div>
    )
}

export function CenterArea() {
    return (
        <div className={centerArea}>
            <div className={centerAreaContent}>
                <p className={typewriterOne}>
                    Code with love
                </p>
                <p className={typewriterTwo}>
                    &&
                </p>
                <p className={typewriterThree}>
                    Design with passion.
                </p>
            </div>
        </div>
    )
}

export default function Container() {
    return (
        <div className={layout}>
            <LeftArea/>
            <CenterArea/>
        </div>
    );
}

export const Head = () => <Seo title="about"></Seo>
