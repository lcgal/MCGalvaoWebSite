import React from 'react'
import componenttyles from "./resumoroteiro.module.css"
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Photo = ({ post }) => (
<StaticQuery
    query={graphql`
    query {
        images: allFile {
        edges {
            node {
            relativePath
            name
            childImageSharp {
                fluid(maxWidth: 350) {
                    ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }
    }
    `}

    render={(data) => {
        const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(post.Photo);
        });

        if (!image) { return <section className={componenttyles.duration}>{ post.Photo } not found </section>}
        
        //return <section className={componenttyles.duration}>{ post.Days } dias e { post.Nights } noites </section>
        return <Img className={componenttyles.image} fluid={image.node.childImageSharp.fluid} alt=""></Img>
    }}
/>
)

Photo.propTypes = {
    post: PropTypes.shape({
        Id: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
        Photo: PropTypes.string,
        Days: PropTypes.string,
        Nights: PropTypes.string,
        Tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
    }).isRequired,
}



export default Photo;