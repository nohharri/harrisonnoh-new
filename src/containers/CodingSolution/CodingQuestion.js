import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './CodingQuestion.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SOLUTION_NAME = 'solution.md';

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={atomOneDark} language={language} children={value} />
    }
}


export default class CodingQuestion extends React.Component {

    constructor(props) {
        super(props);
        const { location: { state: markdownUrl } } = this.props;

        this.state = {
            markdownUrl,
            markdownBody: '',
        };
    }

    componentDidMount() {
        this.getQuestionGithub();
    }

    getMarkdownGithub = async (downloadUrl) => {
        const res = await fetch(downloadUrl);
        res.text().then((markdownBody) => {
            this.setState({ markdownBody });
        });
    }

    // Gets ll the questions from Github repository.
    getQuestionGithub = async () => {
        // markdownUrl is returned with the object inside itself for some reason. TODO: look into this.
        const { markdownUrl: { markdownUrl: markdownParsed } } = this.state;

        const res = await fetch(markdownParsed + '/' + SOLUTION_NAME);
        res.json().then(ans => {
            this.getMarkdownGithub(ans.download_url);
            this.setState({ problems: ans });
        });
    }

    render() {
        const { markdownBody } = this.state;
        return (
            <div>
                <ReactMarkdown renderers={renderers} className={styles.container} children={markdownBody} />
            </div>
        )
    }
}