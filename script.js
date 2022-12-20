// class Angkot {
//   constructor(sopir, trayek, penumpang, kas) {

//     this.sopir = sopir;
//     this.trayek = trayek;
//     this.penumpang = penumpang;
//     this.kas = kas;

//     this.naik = function(namaPenumpang) {
//       this.penumpang.push(namaPenumpang);
//       return this.penumpang
//     }

//     this.turun = function (namaPenumpang, bayar) {
//       if (this.penumpang.length === 0) {
//         alert('masih kosong')
//         return false;
//       }

//       for (let i = 0; i < this.penumpang.length; i++){
//         if (this.penumpang[i] == namaPenumpang) {
//             this.penumpang[i] = undefined;
//             this.kas += bayar;
//             return this.penumpang;
//         }
//       }
//     }
//   }
// }

// let angkot1 = new Angkot('bisma', ['bandung', 'jakarta'], [], 0);


class pemain{
    constructor(nyawa, armor, inventori) {
        this.nyawa = nyawa;
        this.armor = armor;
        this.inventori = inventori;

        this.makan = (makanan) => {
            if (makanan == 'rendang') {
                this.nyawa += 1;
                return this.nyawa;
            }
        }
        
        this.lari = () => {
            this.nyawa -= 1;
            return this.bisma;
        }
    }
}

let bisma = new pemain(10, 'gold', []);