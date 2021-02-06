import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import CodingQuestion from '../CodingSolution/CodingQuestion';

const GITHUB_URL = 'https://api.github.com/repos/nohharri/software-engineering-prep/contents/problems';

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

    render() {
        const { match } = this.props;
        const { problems = [] } = this.state;
        const renderedProblems = [];

        for (const [index, value] of problems.entries()) {
            const { name } = value;
            const cleanedName = name.replaceAll('-', ' ');
            if (!cleanedName.includes('.md')) {
                renderedProblems.push(
                    <div key={index}>
                        <NavLink to={{
                            pathname: match.url + '/' + name,
                            state: {
                                markdownUrl: GITHUB_URL + '/' + name
                            }
                            }}>
                            <h3 onClick={(name) => { this.setState({problemPath: name}) }}>{cleanedName}</h3>   
                        </NavLink>
                    </div>
                );
            }
        }

        let problemComponent = function() { return (
            <div>
                <h1>💻 Coding Problems</h1>
                {renderedProblems}
            </div>
        ) }

        return (
            <div>
                <Switch>
                    <Route path={match.url + '/*' } component={CodingQuestion} />
                    <Route path={match.url} component={problemComponent} />
                </Switch>
            </div>
        )
    }
}
