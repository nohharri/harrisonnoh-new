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

        let currPhotoIdx = 0;
        let collage = [];
        if (photosToShow.length === 4) {
            for (let r = 0; r < 2; r++) {
                let row = [];
                for (let c = 0; c < 2; c++) {
                    let currPhoto = photosToShow[currPhotoIdx];
                    row.push(<div className={styles.photo} key={currPhotoIdx} style={{backgroundImage: `url(${currPhoto.url})` }} />);
                    currPhotoIdx++;
                }
                collage.push(<div className={styles.row} key={r}>{row}</div>);
            }
        }

        this.setState({ photos: collage });
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
                <div className={styles.photoContainer}>{photos}</div>
            </div>
        );
    }
}