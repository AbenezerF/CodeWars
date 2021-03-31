// Merge two arrays and put them in sorted order.
// example mergeSortedArrays( [0,3,4,31], [4,6,30]) should return ([0,3,4,4,6,30,31])
function mergeSortedArrays(arr1, arr2){
   let merged = [];
   let arrayItem1 = arr1[0];
   let arrayItem2 = arr2[0];
   let i = 0; 
   let j = 0;

   if(arr1.length === 0){
       return arr2;
   }
   if(arr2.length === 0){
       return arr1;
   }
   if(arr1.length === 0 && arr2.length === 0){
       return 'Empty inputs. Need valid inputs'
   }

   while(arrayItem1 || arrayItem2){
       if(!arrayItem2 || arrayItem1 > arrayItem2){
           merged.push(arrayItem1);
           arrayItem1 = arr1[i];
           i++;
       }else{
            merged.push(arrayItem2)
            arrayItem2 = arr2[j];
            j++;
       }
       return merged;
   }



}