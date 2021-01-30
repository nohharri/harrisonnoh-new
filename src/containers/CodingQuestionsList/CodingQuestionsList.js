import React from 'react';

export default class CodingQuestionsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getQuestionsGithub();
    }

    // Gets ll the questions from Github repository.
    getQuestionsGithub = async () => {
        const res = await fetch('https://api.github.com/repos/nohharri/software-engineering-prep/contents/problems');
        res.json().then(ans => {
            this.setState({ problems: ans });
        });
    }

    render() {
        const { problems = [] } = this.state;
        const renderedProblems = [];

        for (const [index, value] of problems.entries()) {
            const { name, html_url } = value;
            const cleanedName = name.replace('.md', '').replaceAll('-', ' ');
            renderedProblems.push(
                <div key={index}>
                    <h3><a href={html_url}>{cleanedName}</a></h3>
                </div>
            );
        }

        return (
            <div>
                <h1>Coding Problems</h1>
                {renderedProblems}
            </div>
        )
    }
}

/**
 * const elements = [] //..some array

const items = []

for (const [index, value] of elements.entries()) {
  items.push(<Element key={index} />)
}
 */