
// handle tab click
(function () {
	var tabsList = document.getElementById('articles');
	var tabs = tabsList.getElementsByTagName('ARTICLE');

	tabsList.addEventListener('click', function (e) {
		e.preventDefault();
		for (var i in tabs) {
			tabs[i].className = '';
		} 
		e.target.parentNode.className = 'current';
	});

	window.onload = function () {
		tabs[0].childNodes[1].click();
	};
}());

// data-binding
function ProfileController($scope) {
	$scope.profiles = data;
}