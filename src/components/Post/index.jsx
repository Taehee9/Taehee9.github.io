import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class Post extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    const { slug, categorySlug } = this.props.data.node.fields

    return (
      <div className="post">
        <Link className="post__title-link" to={slug}>
          <h2 className="post__title">
              {title}
          </h2>
          <div className="post__meta">
            <time
              className="post__meta-time"
              dateTime={moment(date).format('MMMM D, YYYY')}
            >
              {moment(date).format('MMMM D, YYYY')}
            </time>
            <span className="post__meta-category" key={categorySlug}>
              <Link to={categorySlug} className="post__meta-category-link">
                {category}
              </Link>
            </span>
          </div>
          <p className="post__description">{description}</p>
        </Link>
      </div>
    )
  }
}

export default Post
