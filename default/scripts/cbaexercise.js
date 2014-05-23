/*global data*/
/*jslint browser: true*/
/*jslint plusplus: true */

(function () {
    'use strict';

    var articleContainerEl;

    // Util
    String.prototype.replaceAll = function (find, replace) {
        return this.replace(new RegExp(find, 'g'), replace);
    };

    // Set up article tab click handler
    articleContainerEl = window.document.getElementById('articles');
    articleContainerEl.addEventListener('click', function (e) {
        var articleEls =
            this.getElementsByTagName('ARTICLE'),
            i;
            
        e.preventDefault();

        if (e.target.parentNode.parentNode !== articleContainerEl) {
            return;
        }

        for (i = 0; i < articleEls.length; i++) {
            articleEls[i].className = '';
        }

        e.target.parentNode.className = 'current';
    });

    // Data-bind
    (function () {
        var template = articleContainerEl.innerHTML,
            articlesHtml = '',
            articleHtml,
            articleData,
            i,
            j,
            tokens = ['firstName', 'lastName', 'picture', 'bio'],
            sortedData = data.sort(function (a, b) {
                return a.firstName + ' ' + a.lastName > b.firstName + ' ' + a.lastName;
            });

        // Loop through the articles in the data-set
        for (i = 0; i < sortedData.length; i++) {
            articleHtml = template;
            articleData = sortedData[i];

            // Loop through the article properties, e.g. firstName
            for (j = 0; j < tokens.length; j++) {
                // Replace the placeholders in the HTML template with the actual values for this article
                articleHtml = articleHtml.replaceAll('{{' + tokens[j] + '}}', articleData[tokens[j]]);
            }

            articlesHtml += articleHtml;
        }

        articleContainerEl.innerHTML = articlesHtml;
    }());

    // Highlight the first article on load.
    window.onload = function () {
        articleContainerEl.getElementsByTagName('A')[0].click();
    };
}());