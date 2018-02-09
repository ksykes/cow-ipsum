"use strict";

let cowIpsumApp = {};
cowIpsumApp.sentence;
cowIpsumApp.paragraph;
cowIpsumApp.newWordsArray = [];
cowIpsumApp.newSentencesArray = [];

cowIpsumApp.cowWordList = ["Angus", "Holstein Friesian", "Shorthorn", "Hereford", "Galloway", "Brown Swiss", "Texas Longhorn", "Ayrshire", "Brangus", "Jersey", "Highland", "Beefmaster", "Dexter", "Guernsey", "Belgian Blue", "Red Poll", "English Longhorn", "Piedmontese", "Aubrac", "Bonsmara", "Normande", "Brahman", "Charolais", "Gelbvieh", "Limousin", "Red Angus", "Simmental", "Watusi", "cattle", "cow", "calf", "heifer", "steer", "bullocks", "ox", "springer", "freemartin", "milk", "beef", "udder", "dairy", "bovine", "bull", "cowshed", "barn", "cow patty", "lowing", "grass", "hay", "chew your cud", "holy cow", "herd", "livestock", "cream", "whole milk", "half and half", "chocolate milk", "churn", "butter", "whey", "domesticated ungulates", "bos taurus", "farm", "horns", "cattle raiding", "bison", "zebu", "yak", "milker", "house cow", "oxtail", "pasture"];


// generate 10 random words from the cowWordList
cowIpsumApp.generateCowWords = () => {
	cowIpsumApp.newWordsArray = [];
	for (let i = 0; i < 11; i++) {
		let randoNum = Math.floor(Math.random() * cowIpsumApp.cowWordList.length);
		let randoWord = cowIpsumApp.cowWordList[randoNum];
		cowIpsumApp.newWordsArray.push(randoWord);
	}
}

// Make a sentence with the 10 random words generated from the cowIpsumApp.generateCowWords function
cowIpsumApp.generateSentence = () => {
	cowIpsumApp.generateCowWords();
	// add the random words to an array with a space in between
	let makeSentence = cowIpsumApp.newWordsArray.join(' ');
	// capitalize and period-ize the sentence
	cowIpsumApp.sentence = makeSentence.charAt(0).toUpperCase() + makeSentence.slice(1) + '.';
	$('.displayIpsum').html(`<p>${cowIpsumApp.sentence}</p>`);
	return cowIpsumApp.sentence;
}

// Make a paragraph of 6 sentences
cowIpsumApp.generateParagraph = () => {
	cowIpsumApp.newSentencesArray = [];
	// run sentence generator
	for (let i = 0; i < 7; i++) {
		let newSentence = cowIpsumApp.generateSentence();
		cowIpsumApp.newSentencesArray.push(newSentence);
	}
	// convert the array of sentences to one string with a space after
	cowIpsumApp.paragraph = cowIpsumApp.newSentencesArray.join(' ').slice(0, -1) + ', moooooooo.';
	$('.displayIpsum').html(`<p>${cowIpsumApp.paragraph}</p>`);
}

// Method to copy cow text
cowIpsumApp.copyText = () => {
	console.log('meep');
}

// event listeners
cowIpsumApp.events = () => {
	$('#sentenceButton').on('click', (e) => {
		e.preventDefault();
		cowIpsumApp.generateSentence();
	});
	
	$('#paragraphButton').on('click', (e) => {
		e.preventDefault();
		cowIpsumApp.generateParagraph();
	});

	$('#copyButton').on('click', (e) => {
		e.preventDefault();
	});
}


cowIpsumApp.init = () => {
	cowIpsumApp.events();
}

$(function() {
	cowIpsumApp.init();
});