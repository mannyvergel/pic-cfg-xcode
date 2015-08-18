//image cleaner for iOS / mac projects on XCode

module.exports = function(cleaner) {

  return {
    imageFormats: ['png', 'jpg', 'jpeg'],
    fileFormats: ['xib', 'm', 'h'],
    searchImageOpts: {
      //shortName: true
    },
    doAfterMatch: function(file, matchedImage, done) {
      this.addImageWithReference(matchedImage);
      
      //remove @2x and @3x also
      var lastIndex = matchedImage.lastIndexOf('.');
      var filename2x = matchedImage.substr(0, lastIndex) + '@2x' + matchedImage.substr(lastIndex);
      this.addImageWithReference(filename2x);

      var filename3x = matchedImage.substr(0, lastIndex) + '@3x' + matchedImage.substr(lastIndex);
      this.addImageWithReference(filename3x);
      done();
    }
  }
}