export function handleGenreFilter(e, originalList, setFilms) {
	const selectedFilter = e.target.value;
	if (selectedFilter !== "ALL") {
		const filteredFilms = originalList.filter((film) => film.genre == selectedFilter);
		setFilms(filteredFilms);
	} else {
		setFilms(originalList);
	}
}

export function handleTitleFilter(e, originalList, setFilms) {
	const selectedFilter = e.target.value;
	if (selectedFilter !== "ALL") {
		const filteredFilms = originalList.filter((film) =>
			film.title.toLowerCase().includes(selectedFilter.toLowerCase())
		);
		setFilms(filteredFilms);
	} else {
		setFilms(originalList);
	}
}

export function handleAddFilm(e, originalList, addFilm, setFilms) {
	e.preventDefault();
	originalList.push(addFilm);
	setFilms(originalList);
}

export function handleSetNewFilm(e, addFilm, setAddFilm) {
	setAddFilm({
		...addFilm,
		[e.target.name]: e.target.value,
	});
}
