class Slider {
    constructor(params) {
        this.images = params.images;
        this.currentImageIndex = 0;
        this.area = document.querySelector(params.area);
        this.width = params.width || '100%';
        this.height = params.height || '100%';
        this.createSlider();
        this.updateImage();
    }

    createSlider() {
        this.sliderContainer = document.createElement('div');
        this.sliderContainer.style.cssText = `width: ${this.width}; height: ${this.height};`;
        this.sliderContainer.classList.add('slider-container');

        this.imageElement = document.createElement('img');
        this.imageElement.classList.add('slider-image');

        this.nextButton = this.createButton('Suivant', 'next-button', this.next.bind(this));
        this.previousButton = this.createButton('Précédent', 'previous-button', this.previous.bind(this));

        this.sliderContainer.append(this.imageElement, this.previousButton, this.nextButton);
        this.area.appendChild(this.sliderContainer);
    }

    createButton(text, className, clickHandler) {
        const button = document.createElement('button');
        button.classList.add(className);
        button.innerText = text;
        button.addEventListener('click', clickHandler);
        return button;
    }

    next() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.updateImage();
    }

    previous() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    updateImage() {
        const { src, title } = this.images[this.currentImageIndex];
        this.imageElement.src = src;
        this.imageElement.alt = title;
    }
}

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

const slider = new Slider(params);
