import React from 'react';
import {graphql} from "gatsby";
import Seo from "../../components/seo";
import {MDXProvider} from "@mdx-js/react";
import {h1} from "../../components/mdxFormat";

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
            tableOfContents
        }
    }`

const BlogPage = ({data}) => {

    return (
        <>
            <MDXProvider components={{h1: h1}}>
                {data.mdx.body}
            </MDXProvider>
        </>
    );
}

export default BlogPage

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}></Seo>
