import React from 'react';
import {graphql, useStaticQuery} from "gatsby";

import Footer from "../components/footer";


import {layout} from '../styles/basic.module.css'
import { leftArea, leftAreaItem, footer, footContainer} from '../styles/leftSide.module.css'
import {centerArea, centerAreaContent, boldHr, thinHr, blogInfo, blogTitle, blogDate, blogAbstract} from "../styles/blogs.module.css"
import {rightArea, rightAreaMotto} from '../styles/rightSide.module.css'

import Seo from "../components/seo";

export function LeftArea() {
    return (
        <div className={leftArea}>
            <div className={leftAreaItem}>
                <a href={"/about"}>About</a>
            </div>
            <div className={leftAreaItem}>
                <a href={"/blog"}>Blogs</a>
            </div>
            <div className={leftAreaItem}>
                <a href={"/papers"}>Papers</a>
            </div>
            <div className={leftAreaItem}>
                <a href={"/about"}>Tags</a>
            </div>
        </div>
    )
}

export function CenterArea() {
    const data = useStaticQuery(
        graphql`
        query {
            allMdx(
                filter: {frontmatter: {type: {eq: "paper"}}}
                sort: {frontmatter: {date: DESC}}
            ) {
                nodes {
                    id
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        type
                    }
                }
            }
        }`
    )

    return (
        <div className={centerArea}>
            <div className={centerAreaContent}>
                <h1>Papers</h1>
                <p className={blogDate}>Total: {data.allMdx.nodes.length}</p>
                <hr className={boldHr}/>
                <ul>
                    {
                        data.allMdx.nodes.map(node => (
                            <article key={node.id} className={blogInfo}>
                                <a className={blogTitle} href={node.frontmatter.slug}>
                                    {node.frontmatter.title}
                                </a>
                                <p className={blogDate}>
                                    {node.frontmatter.date}
                                </p>
                                <p className={blogAbstract}>
                                    {node.excerpt}
                                </p>
                                <hr className={thinHr}/>
                            </article>
                        ))
                    }
                </ul>
            </div>
            <div className={footContainer}>
                <div className={footer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export function RightArea() {
    return (
        <div className={rightArea}>
            <div className={rightAreaMotto}>
                <p>
                    Code with love &&
                </p>
                <p>
                    Design with passion.
                </p>
                <p>
                    Milo Song.
                </p>
            </div>
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

export const Head = () => <Seo title="papers"></Seo>
