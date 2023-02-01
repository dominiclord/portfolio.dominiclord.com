import { module } from 'modujs';
import { Swiper, Pagination, Navigation } from 'swiper';

export default class extends module {

    init() {
        Swiper.use([Pagination, Navigation]);

        this.length = this.$('item').length
        this.container = this.$('container')[0];
        this.arrowNext = this.$('next')[0]
        this.arrowPrev = this.$('prev')[0]
        this.pagination = this.$('pagination')[0]

        this.gallery = new Swiper(this.container, {
            loop: false,
            speed: 600,
            slidesPerView: 1.1,
            slideToClickedSlide: true,
            grabCursor: true,
            threshold: 5,
            spaceBetween: 20,
            navigation: {
                prevEl: this.arrowPrev,
                nextEl: this.arrowNext
            },
            pagination: {
                el: this.pagination,
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                1000: {
                    slidesPerView: 1.3,
                    spaceBetween: 20
                }
            },
            on: {
                'afterInit' : () => {
                    this.call('update', null, 'Scroll')
                },
            },
        })
    }

    destroy() {
        if(this.gallery && this.gallery.destroy) this.gallery.destroy()
    }
}
