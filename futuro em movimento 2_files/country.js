(function () {
	var country = {'code':'br','id':42,'defaultLangauge':'pt-br'};
	
	if (!window.evidon) window.evidon = {};
	
	if (window.evidon.notice) {
		window.evidon.notice.setLocation(country);
	}
	else {
		window.evidon.location = country;
	}
})();