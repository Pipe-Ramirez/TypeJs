function parseString(input: string[]): string;
function parseString(input: string): string[];

function parseString(input: unknown): unknown{
  if(Array.isArray(input)){
    return input.join('');
  }else if (typeof input === 'string'){
    return input.split('');
  }
}

const rta = parseString('Felipe');
rta.reverse();
const rta2 = parseString(['F','e','l','i','p','e']);
rta2.toLocaleLowerCase();
console.log(rta, rta2);
