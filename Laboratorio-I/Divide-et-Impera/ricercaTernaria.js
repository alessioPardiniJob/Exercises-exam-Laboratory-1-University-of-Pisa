 
 // JavaScript program to illustrate
 // recursive approach to ternary search
  
 // Function to perform Ternary Search
 function ternarySearch(l, r, key, ar)
 {
     if (r >= l) {

         // Find the mid1 and mid2
         let mid1 = l + parseInt((r - l) / 3, 10);
         let mid2 = r - parseInt((r - l) / 3, 10);

         // Check if key is present at any mid
         if (ar[mid1] == key) {
             return mid1;
         }
         if (ar[mid2] == key) {
             return mid2;
         }

         // Since key is not present at mid,
         // check in which region it is present
         // then repeat the Search operation
         // in that region

         if (key < ar[mid1]) {

             // The key lies in between l and mid1
             return ternarySearch(l, mid1 - 1, key, ar);
         }
         else if (key > ar[mid2]) {

             // The key lies in between mid2 and r
             return ternarySearch(mid2 + 1, r, key, ar);
         }
         else {

             // The key lies in between mid1 and mid2
             return ternarySearch(mid1 + 1, mid2 - 1, key, ar);
         }
     }

     // Key not found
     return -1;
 }

let a = [1,3,4,6,7,10,15,20];
console.log(ternarySearch(0,a.length,10,a));