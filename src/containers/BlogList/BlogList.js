import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import styles from './BlogList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Displays contents from the blog. Currently displays every post.
 */
export default class BlogList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { blogPosts: [] };
    }

    componentDidMount() {
        this.getBlogPosts();
    }

    async getBlogPosts() {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@harrisonkolor');
        const { items } = await res.json();
        this.setState({ blogPosts: items });
    }

    renderBlogPosts(blogPosts = []) {
        return blogPosts.map((val, idx) => {
            const { title, pubDate, link } = val;
            const formattedDate = moment(pubDate).format('MMMM YYYY');
            return (
                <div key={idx}>
                    <h2><a rel="noreferrer" target="_blank" href={link}>{title}</a></h2>
                    <h3 className={styles.date}>{formattedDate}</h3>
                </div>
            )
        })
    }

    render() {
        const { blogPosts } = this.state;

        return (
            <div className={styles.container}>
                <hr />
                <div className={styles.notice}>These links will redirect you to Medium.com. <FontAwesomeIcon icon={faExternalLinkAlt} /></div>
                {this.renderBlogPosts(blogPosts)}
            </div>
        )
    }
}