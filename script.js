const title = document.querySelector("section .h-screen h1");

title.addEventListener('click', function(){
    title.classList.toggle('underline');
});

// batas

// let jumlahAngkot = 10;
// let angkotBeroperasi = 6;
// let noAngkot = 1;

// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {

//     if(noAngkot <= 6 && noAngkot !== 5){
//         console.log('angkot no ' + noAngkot + ' beroperasi dengan baik');
//     } 
    
//     else if ( noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
//         console.log('angkot no ' + noAngkot + ' sedang lembur')
//     }

//     else {
//         console.log('angkot no ' + noAngkot + ' tidak beroperasi');
//     }
// }

// BATAS

// let angka = prompt('masukkan angka');

// if (angka % 2 === 0) {
//     console.log(angka + ' bilangan GENAP');
    
// } else if (angka % 2 === 1) {
//     console.log(angka + ' bilangan GANJIL');

// } else {
//     console.log(angka + ' bukan angka');
// // }

let nat = '';

for (let i = 10; i>0; i--) {
    for (let a = 0; a<i; a++) {
        nat += '*';
    }
    nat += '\n';
}

console.log(nat);