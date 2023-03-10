// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "ismet", "can", "canan", "matheww"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

const bosDizi = [];
console.log(bosDizi);
// ! 2.Yöntem (Object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlik bos bir Array oluşturdu
const numbers1 = new Array(10);
console.log(numbers1);

// ! 3.Yöntem (Array.of())
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma
console.log(diller[1]);
const go = diller[3];
console.log(go);

console.log(isimler[isimler.length - 1]);
//? at()
console.log(isimler.at(-1)); // son elementi getirir

//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "saffet";
console.log(isimler);

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];

//? numbers dizisinin son elementinin degerini bir arttirin
console.log(numbers);
numbers[numbers.length - 1]++;
console.log(numbers);

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

console.log(kisiler);

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.

const yas55 = kisiler[5][2];
console.log(yas55);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--; //?43
console.log(kisiler);
console.log(yaslar);
//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//** pop() son elemanı siler ve sildigi elemani dondurur.
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen");
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const audi = arabalar.shift();
console.log(arabalar, audi);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
console.log(arabalar);

//* Dizinin tamamini ters siraya cevirir.
arabalar.reverse();
console.log(arabalar);

// * sort() Diziyi alfabetik olarak siralar.
isimler.sort();
console.log(isimler);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.
const sayilar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);

//* fill()  # tamamina ne istiyorsaniz onu basar
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI dizinin orjnalligini bozmayan metotlardir
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5)); //? true
console.log(sayilar1.includes("5")); //? false

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //? 2
console.log(sayilar1.lastIndexOf(2)); //? 5
console.log(sayilar1.lastIndexOf(4)); //? -1

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
const a = [3, 4, 6, 5, 2, "yedi", "iki", "dort", 8, 7, "bes"];
let sayi = prompt("lutfen bir sayi giriniz.");
if (a.includes(sayi) == true) {
  console.log(a.findIndex(sayi));
} else {
  console.log("aranilan sayi bulunamamistir");
}

//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
// console.log(sayilar1.join(" "));
// console.log(sayilar1.join()); // 3,5...
// console.log(sayilar1);

// //* toString()
// //*-----------------------------------------------------------
// //? toString fonksiyonu sadece dizinin elemanlarinin aralarina
// //? (virgul) koyarak birlestirir ve string yapar.
// console.log(sayilar1.toString());

// * slice()
//*-----------------------------------------------------------
// const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
// const yeniArabalar = arabalar1.slice(2);
// console.log(yeniArabalar, arabalar1);

// const yeniArabalar1 = arabalar1.slice(1, 3);
// console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------
// const yazilar = ["Bugun", "hava", "cok", "guzel"];
// const numbersArr = [1, 2, 5, 7];
// const combinedArr = yazilar.concat(
//   true,
//   numbersArr,
//   ["aslinda", "cok", "sicak"],
//   [["x", "y"]]
// );
// console.log(combinedArr);

//* every()
//*-----------------------------------------------------------

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

//* find()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

// let ayy = 10;
// let beyy = 0;
// while (ayy > 13 || beyy <= 2) {
//   ayy++;
//   beyy += 2;
// }

//-----------------------------------------------------------

// let dailyActivities = ["eat", "sleep"];

// // this will add the new element 'exercise' at the 2 index
// dailyActivities[2] = "exercise";

// console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

// //______________________________________________________________
// let dailyActivities = ["work", "eat", "sleep", "exercise"];

// // remove the last element
// dailyActivities.pop();
// console.log(dailyActivities); // ['work', 'eat', 'sleep']

// // remove the last element from ['work', 'eat', 'sleep']
// const removedElement = dailyActivities.pop();

// //get removed element
// console.log(removedElement); // 'sleep'
// console.log(dailyActivities); // ['work', 'eat']

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// concat()	joins two or more arrays and returns a result
// indexOf()	searches an element of an array and returns its position
// find()	returns the first value of an array element that passes a test
// findIndex()	returns the first index of an array element that passes a test
// forEach()	calls a function for each element
// includes()	checks if an array contains a specified element
// push()	aads a new element to the end of an array and returns the new length of an array
// unshift()	adds a new element to the beginning of an array and returns the new length of an array
// pop()	removes the last element of an array and returns the removed element
// shift()	removes the first element of an array and returns the removed element
// sort()	sorts the elements alphabetically in strings and in ascending order
// slice()	selects the part of an array and returns the new array
// splice()	removes or replaces existing elements and/or adds new elements
