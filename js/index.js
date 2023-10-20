'use strict';
import { Slider } from './Slider.js'

const images = [
    { src: 'images/1.jpg', title: 'A link to the Past' },
    { src: 'images/2.jpg', title: 'Twilight princess' },
    { src: 'images/3.jpg', title: 'Skyward Sword' },
    { src: 'images/4.jpg', title: 'WindWaker' },
    { src: 'images/5.jpg', title: 'Breath of the wild' },
    { src: 'images/6.jpg', title: "Link's awakening" },
];

const params = {
    images,
    area: 'div.slider',
    width: '100%',
    height: '100%',
};
const params2 = {
    images,
    area: 'div.slider2',
    width: '50%',
    height: '50%',
};

const slider = new Slider(params);
const slider2 = new Slider(params2);