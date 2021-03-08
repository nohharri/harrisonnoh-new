import React, { Fragment } from 'react';
import { Parallax } from 'react-parallax';
import Introduction from '../Introduction/Introduction';
import BlogList from '../BlogList/BlogList';
import background from '../../static/mountain.jpg';
import Header from '../Header/Header';

export default class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Parallax bgImage={background} strength={300} className="background">
                    <div className="fakeBackground">
                    <Header />
                    <Introduction />
                    </div>
                </Parallax>
                <BlogList />
            </Fragment>
        )
    }
}