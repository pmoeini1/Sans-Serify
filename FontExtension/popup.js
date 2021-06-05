// add onclick listeners on buttons to change font to desired language
var b1 = document.getElementById("button1")
var b2 = document.getElementById("button2")
var b3 = document.getElementById("button3")
b1.addEventListener('click', function() {
    chrome.fontSettings.setFont(
        { genericFamily: 'sansserif', script: 'Jpan', fontId: 'MS PGothic' }
      );
})
b2.addEventListener('click', function () {
    chrome.fontSettings.setFont(
        { genericFamily: 'sansserif', script: 'Arab', fontId: 'MS PGothic' }
    );
})
b3.addEventListener('click', function () {
    chrome.fontSettings.setFont(
        { genericFamily: 'sansserif', script: 'Grek', fontId: 'MS PGothic' }
    );
})
