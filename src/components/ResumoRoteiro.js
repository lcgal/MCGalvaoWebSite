import React from 'react'
import PropTypes from 'prop-types'

const ResumoRoteiro = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <Link to={url} className="resumo-roteiro">
            <header className="resumo-roteiro-header">
                {post.feature_image &&
                    <div className="resumo-roteiro-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                {post.tags && <div className="resumo-roteiro-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                <h2 className="resumo-roteiro-title">{post.title}</h2>
            </header>
            <section className="resumo-roteiro-excerpt">{post.excerpt}</section>
            <footer className="resumo-roteiro-footer">
                <div className="resumo-roteiro-footer-left">
                    <div className="resumo-roteiro-avatar">
                        {post.primary_author.profile_image ?
                            <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                            <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                        }
                    </div>
                    <span>{ post.primary_author.name }</span>
                </div>
                <div className="resumo-roteiro-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
        </Link>
    )
}

ResumoRoteiro.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default ResumoRoteiro
