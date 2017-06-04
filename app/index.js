import _ from 'lodash';

// http://stackoverflow.com/a/29424616
require.context(
  "./common", // context folder
  true, // include subdirectories
  /.*/ // RegExp
)("./" + expr + "");

function component () {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	return element;
}

document.body.appendChild(component());
