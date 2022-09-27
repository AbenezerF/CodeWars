// Complementary DNA (7kyu)


function DNAStrand(dna){
  let pairs = {'A':'T','T':'A','C':'G','G':'C'};
  return dna.split('').map( (v) => pairs[v] ).join('');
}
