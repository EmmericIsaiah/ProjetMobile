//dictionnare contenant les mots à deviner
export const dict = {
    key1: "france",
    key2: "allemagne"
};

//Mélange les lettres d'un mot
export function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

