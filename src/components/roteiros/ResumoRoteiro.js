import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import componenttyles from "./resumoroteiro.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"



const ResumoRoteiro = ({ post }) => {
    const url = `/${post.id}/`

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "iglu.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className = {componenttyles.resumoroteiro}>
            <div className = {componenttyles.roteiroinformation}> 
                <Link to={url} style={{ textDecoration: 'none' }}>
                    <Img className={componenttyles.image} fluid={data.placeholderImage.childImageSharp.fluid} alt=""></Img>
                    <section className={componenttyles.name}>{post.name}</section>
                    <section className={componenttyles.duration}>
                        <span>{ post.days } dias e { post.nights } noites</span>
                    </section>
                </Link>
            </div>
        </div>
    )
}

ResumoRoteiro.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        days: PropTypes.string,
        nights: PropTypes.string,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
    }).isRequired,
}

export default ResumoRoteiro
