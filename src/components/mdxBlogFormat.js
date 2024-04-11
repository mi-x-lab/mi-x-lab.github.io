import React from "react";
import * as MDXStyles from '/src/styles/mdxBlogFormat.module.css'

export const P = props => (
    <p className={MDXStyles.mdxp} {...props} />
)

export const H1 = props => (
    <h1 className={MDXStyles.mdxh1} {...props} />
)
// export const H2 = props => (
//
// )

