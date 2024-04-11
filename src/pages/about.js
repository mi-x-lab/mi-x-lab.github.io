import React from 'react';
import {Link, useStaticQuery, graphql} from "gatsby";
import {layout, leftArea, leftAreaItem, centerArea, centerAreaContent, rightArea} from "./index.module.css"
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
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `)

    return (
        <div className={centerArea}>
            <div className={centerAreaContent}>
                <h1>{data.site.siteMetadata.title} developing</h1>
                <hr/>
                <p>{data.site.siteMetadata.description}</p>
                <p>{data.site.siteMetadata.siteUrl}</p>
            </div>
        </div>
    )
}

export function RightArea() {
    return (
        <div className={rightArea}>
            Right
        </div>
    )
}

export default function SimpleContainer() {
    return (
        <div className={layout}>
        <LeftArea/>
            <CenterArea/>
            <RightArea/>
        </div>
    );
}

export const Head = () => <Seo title="mixlab"></Seo>
