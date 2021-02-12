import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import CodingQuestion from '../CodingSolution/CodingQuestion';
import styles from './CodingQuestionsList.module.scss';

const GITHUB_URL = 'https://api.github.com/repos/nohharri/software-engineering-prep/contents/problems';
const GITHUB_DOWNLOAD_URL = 'https://raw.githubusercontent.com/nohharri/software-engineering-prep/master/problems';

export default class CodingQuestionsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            problemPath: ''
        };
    }

    componentDidMount() {
        this.getQuestionsGithub();
    }

    // Gets ll the questions from Github repository.
    getQuestionsGithub = async () => {
        const res = await fetch(GITHUB_URL);
        res.json().then(ans => {
            this.setState({ problems: ans });
        });
    }

    getRenderedList = (url, downloadUrl, problems = []) => {
        const renderedProblems = [];
        const { match } = this.props;

        for (const [index, value] of problems.entries()) {
            const { name } = value;
            const cleanedName = name.replaceAll('-', ' ');
            //if (!cleanedName.includes('.md')) {
                renderedProblems.push(
                    <div key={index}>
                        <NavLink className={styles.problem} to={{
                            pathname: match.url + '/' + name,
                            state: {
                                markdownUrl: url + '/' + name,
                                downloadUrl: downloadUrl + '/' + name,
                            }
                            }}>
                            <h3 className={styles.problem} onClick={(name) => { this.setState({problemPath: name}) }}>{cleanedName}</h3>   
                        </NavLink>
                    </div>
                );
            //}
        }

        return renderedProblems;
    }

    render() {
        const { match } = this.props;
        const { problems = [] } = this.state;
        
        const problemList = this.getRenderedList(GITHUB_URL, GITHUB_DOWNLOAD_URL, problems);

        let problemComponent = function() { return (
            <div>
                <h1>💻 Coding Problems</h1>
                <div className={styles.problemListContainer}>
                    {problemList}
                </div>
            </div>
        ) }

        return (
            <div className={styles.container}>
                <Switch>
                    <Route path={match.url + '/*' } component={CodingQuestion} />
                    <Route path={match.url} component={problemComponent} />
                </Switch>
            </div>
        )
    }
}
