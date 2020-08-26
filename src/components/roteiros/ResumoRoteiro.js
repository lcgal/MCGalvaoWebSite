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
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className = {componenttyles.resumoroteiro}>
              <Link to={url} style={{ textDecoration: 'none' }}>
                  <div className = {componenttyles.roteiroinformation}> 
                    <Img className={componenttyles.image} fluid={data.placeholderImage.childImageSharp.fluid} alt=""></Img>
                    <section className={componenttyles.name}>{post.name}</section>
                    <hr className = {componenttyles.dividingline}></hr>
                    <section className={componenttyles.duration}>{ post.days } dias e { post.nights } noites </section>
                  </div>
              </Link>
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
