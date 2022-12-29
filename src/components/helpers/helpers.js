import dumb from '../../images/death-star.svg';

export default class Helpers {
    onImageError = (e) => {
        e.target.src = dumb;
    }
}
