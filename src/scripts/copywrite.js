module.exports = function copywriteDate(designYear){
	var currentYear = new Date().getFullYear()
	var displayYear

	if (designYear == currentYear) {
		displayYear = designYear
	}
	else {
		displayYear = (designYear + " - " + currentYear)
	}
	return (displayYear + " &copy Copyright")
}
