const stringValue = "Hi";

function stringToChars(stringValue)
{
  return stringValue.split('');
}

// Lower and uppercase ascii array creation
function createAsciiValues(asciiCase){
  const startPoint = asciiCase === 'uppercase' ? 65 : 97
  const maxValue = asciiCase=== 'uppercase' ? 90 : 122
  
    const asciiValues = [];
    for(let i = startPoint-1; i < maxValue; i++){
       asciiValues.push(i+1);
    }
    return asciiValues;
} 

const lowercaseValues = createAsciiValues('lowercase');
const uppercaseValues = createAsciiValues('uppercase');


// Lower and uppercase letters







