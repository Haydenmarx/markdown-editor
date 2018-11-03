document.getElementById('test').addEventListener('input', (e) => {
  // document.getElementById('display').innerText = sentenceParser(e.target.value); testing
  document.getElementById('display').innerHTML = sentenceParser(e.target.value);
});

const sentenceParser = (str) => {
  const openingTags = {1:'<h1>',2:'<h2>',3:'<h3>',4:'<h4>',5:'<h5>',6:'<h6>'};
  const closingTags = {1:'</h1>',2:'</h2>',3:'</h3>',4:'</h4>',5:'</h5>',6:'</h6>'}
  let result = '';
  let start = true;
  let startLocation = 0;
  let openingTag;
  let closingTag; 
  for(var x = 0; x <= str.length; x++)  {
    if (start) {
      if (str[x] === '#') {
	      //keep trucking
      } else if (str[x] === ' ') {
        start = false;
        console.log(startLocation, x)
        openingTag = openingTags[x - startLocation];
        closingTag = closingTags[x - startLocation];
        if (openingTag === undefined) {
          openingTag = '<p>';
          closingTag = '</p>';
        } else {
          startLocation = x+1;
        }
      } else {
        start = false;
        openingTag = '<p>';
        closingTag = '</p>';
      }
    }
    if (str[x] === '\n' || str[x] === undefined) {
      result = result.concat(openingTag, str.slice(startLocation, x), closingTag, str.slice(x, x+1));
      start = true;
      startLocation = x+1;
    }
  }
  return result;
}