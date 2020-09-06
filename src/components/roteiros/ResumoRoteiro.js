import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import componenttyles from "./resumoroteiro.module.css"
import Thumbnail from "./Thumbnail.js"




const ResumoRoteiro = ({ post }) => {
    const url = `/${post.Slug}/`

    return (
        <div className = {componenttyles.resumoroteiro}>
              <Link to={url} style={{ textDecoration: 'none' }}>
                  <div className = {componenttyles.roteiroinformation}> 
                    <Thumbnail key={post.Id} post={post} />
                    <section className={componenttyles.name}>{post.Name}</section>
                    <hr className = {componenttyles.dividingline}></hr>
                    <section className={componenttyles.duration}>{ post.Days } dias e { post.Nights } noites </section>
                  </div>
              </Link>
        </div>
    )
}

ResumoRoteiro.propTypes = {
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
        Slug: PropTypes.string,
    }).isRequired,
}

export default ResumoRoteiro
