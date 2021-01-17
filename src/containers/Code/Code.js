import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import BlogList from '../BlogList/BlogList';
import Header from '../Header/Header';
import CodingQuestionsList from '../CodingQuestionsList/CodingQuestionsList';
import styles from './Code.module.scss';

export default class Code extends React.Component {

    render() {
        const { match } = this.props;
        return (
            <div className={styles.container}>
                <Header />

                <div className={styles.navigation}>
                    <NavLink exact to={match.url} activeClassName={styles.active} className={styles.navigationButton}>
                        <h2>Medium Posts</h2>
                        <p>Posts on Medium.com.</p>
                    </NavLink>
                    <NavLink to={match.url + '/algorithms'} activeClassName={styles.active} className={styles.navigationButton}>
                        <h2>Coding Interview</h2>
                        <p>Ds and algos.</p>
                    </NavLink>
                </div>

                <Switch>
                    <Route path={match.url + '/algorithms'} component={CodingQuestionsList} />
                    <Route path={match.url} component={BlogList} />
                </Switch>

            </div>
        )
    }
}
