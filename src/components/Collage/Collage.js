import React from 'react';
import styles from './Collage.module.scss';

export default class Collage extends React.PureComponent {

    async getInstagramPhotos() {
        const res = await fetch('/api/photos');
        const photos = await res.json();

        // Gets four random numbers
        let randomNum = Math.floor(Math.random() * photos.length);

        let photosToShow = [];
        for (let i = 0; i < 4; i++) {
            photosToShow.push(photos[randomNum]);
            randomNum = randomNum + 1 < photos.length ? randomNum + 1 : 0;
        }

        this.setState({ photos: photosToShow });
    }

    constructor() {
        super();
        this.state = {
            photos: [],
        };
    }

    componentDidMount() {
        this.getInstagramPhotos();
    }

    render() {
        const { photos } = this.state;
        return (
            <div className={styles.container}>
                {
                    photos && photos.map((val, idx) => {
                        return <div className={styles.photo} key={idx} style={{backgroundImage: `url(${val.url})` }} />
                    })
                }
            </div>
        );
    }
}