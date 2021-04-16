/* DNA to RNA Conversion (8kyu)
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological 
systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), 
Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs 
slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine 
is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
*/

// using in-built methods and regex
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
   }

// my own implementation
function DNAtoRNA(dna) {
    let arr = dna.split('');
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'T') arr[i] = 'U'
    }
    return arr.join('')
  }