document.addEventListener('DOMContentLoaded', () => {
	const filters = document.querySelectorAll('.filter');

	if (filters.length === 0) return;

	filters.forEach(filter => {
		const filterItem = filter.querySelector('.filter__item');
		const sublist = filter.querySelector('.filter__sublist');

		if (!filterItem || !sublist) return;

		// Открытие / закрытие списка
		filterItem.addEventListener('click', event => {
			// Закрываем все открытые списки, кроме текущего
			document.querySelectorAll('.filter__sublist').forEach(list => {
				if (list !== sublist) list.classList.remove('active');
			});

			// Переключаем активный класс
			sublist.classList.toggle('active');

			event.stopPropagation();
		});

		// Выбор элемента и смена текста
		sublist.querySelectorAll('.filter__subitem').forEach(subitem => {
			subitem.addEventListener('click', event => {
				const span = filterItem.querySelector('span');
				if (span) {
					span.textContent = subitem.textContent;
				}

				sublist.classList.remove('active'); // Закрываем список
				event.stopPropagation();
			});
		});
	});

	// Закрываем список при клике вне фильтра
	document.addEventListener('click', event => {
		if (!event.target.closest('.filter')) {
			document.querySelectorAll('.filter__sublist').forEach(list => {
				list.classList.remove('active');
			});
		}
	});
});
