document.addEventListener('DOMContentLoaded', function () {
	const swiperEl = document.querySelector('.scroller');

	if (swiperEl && window.Swiper) {
		new Swiper(swiperEl, {
			pagination: {
				el: '.car-pagination',
			},
			loop: true,
			// ... дополнительные настройки
		});
	}

	const swiperBrand = document.querySelector('.brands-slide');

	if (swiperBrand && window.Swiper) {
		new Swiper(swiperBrand, {
			slidesPerView: 6,
			slidesPerGroup: 1,
			loop: true,
			navigation: {
				nextEl: '.swiper-custom-next',
				prevEl: '.swiper-custom-prev',
			},
		});
	}

	const swiperBrandCatalog = document.querySelector('.brands-catalog-slide');

	if (swiperBrandCatalog && window.Swiper) {
		new Swiper(swiperBrandCatalog, {
			slidesPerView: 8,
			slidesPerGroup: 1,
			spaceBetween: 60,
			loop: true,
			navigation: {
				nextEl: '.swiper-custom-next',
				prevEl: '.swiper-custom-prev',
			},
		});
	}

	const swiperCatalogItem = document.querySelector('.catalog-car-swiper');

	if (swiperCatalogItem && window.Swiper) {
		new Swiper(swiperCatalogItem, {
			pagination: {
				el: '.catalog-car-pagination',
				clickable: true,
			},
		});
	}

	const swiperCardMini = document.querySelector('.card-swiper-mini');

	if (swiperCardMini && window.Swiper) {
		new Swiper(swiperCardMini, {
			spaceBetween: 10,
			slidesPerView: 5,
			slidesPerGroup: 1,
			freeMode: true,
		});
	}
	const swiperCardMiniTwo = document.querySelector('.card-swiper-mini-two');

	if (swiperCardMiniTwo && window.Swiper) {
		new Swiper(swiperCardMiniTwo, {
			spaceBetween: 10,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-custom-next',
				prevEl: '.swiper-custom-prev',
			},
			thumbs: {
				swiper: swiperCardMini,
			},
		});
	}

	const swiperCardImages = document.querySelector('.card-swiper-images');

	if (swiperCardImages && window.Swiper) {
		new Swiper(swiperCardImages, {
			spaceBetween: 10,
			slidesPerView: 10,
			slidesPerGroup: 1,
			freeMode: true,
		});
	}
	const swiperCardImage = document.querySelector('.card-swiper-image');

	if (swiperCardImage && window.Swiper) {
		new Swiper(swiperCardImage, {
			spaceBetween: 10,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-custom-next',
				prevEl: '.swiper-custom-prev',
			},
			thumbs: {
				swiper: swiperCardImages,
			},
		});
	}
});
