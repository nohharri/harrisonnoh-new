import React from 'react';
import BlogList from '../BlogList/BlogList';
import styles from './Code.module.scss';

export default class Code extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <BlogList />
            </div>
        )
    }
}