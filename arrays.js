//1 Найти минимальный элемент массива

let minNum = [5, 0, -400, 355, 17, 3];

for (let i = 0; i < minNum.length; i++) {
    if(minNum[i] < minNum[0]){
        minNum[0] = minNum[i];
    }
}
console.log(minNum[0]);

//2  Найти максимальный элемент массива


let maxNum = [5, -1, 400, 355, 17, 3];

for (let i = 0; i < maxNum.length; i++) {
    if(maxNum[i] > maxNum[0]){
        maxNum[0] = maxNum[i];
    }
}
console.log(maxNum[0]);


//3 Найти индекс минимального элемента массива


const arr = [1,5,8,-100]

const minElementIndexOfArray = (array) => {
    let minElement = 0;
    array.forEach((item, index) => {

        if (item < array[minElement]) {
            minElement = index;
        }
        else {
            return false;
        }
    });
    console.log(`Индекс минимального элемента - ${minElement}`);
}

minElementIndexOfArray(arr);


//4 Найти индекс максимального элемента массива

const array = [1,5,8,-100]

const maxElementIndexOfArray = (array) => {
    let maxElement = 0;
    array.forEach((item, index) => {

        if (item > array[maxElement]) {
            maxElement = index;
        }
        else {
            return false;
        }
    });
    console.log(`Индекс максимального элемента - ${maxElement}`);
}

maxElementIndexOfArray(array);

//5 Посчитать сумму элементов массива с нечетными индексами

const sumElement = [0,1, 2,3,4,5,6,7, 8, 9]
const getSumElements = () => {
    let sum = 0;

    sumElement.forEach((item, index) => {
        if (index % 2 !== 0){
            console.log( sum += item)
        }
    });
};
getSumElements()

//6 Сделать реверс массива (массив в обратном направлении)


let reversArray = [11,22,33]

const arrayReverse = () => {
    let reverse = [];
    for(let i = 0; i < reversArray.length; i++) {
        reverse.unshift(reversArray[i]);
    }
    console.log(reverse);
}
arrayReverse()


//7 Посчитать количество нечетных элементов массива


const oddNumber = [2,4,8, 1, 3 ,6]
const sumOddNumbers = (oddNumber) => {
    let sumNumbers = 0;

    for(let i = 0; i < oddNumber.length; i++) {
        if(oddNumber[i] % 2 !== 0) {
            sumNumbers++;
        }
    }
    console.log(sumNumbers);
}
sumOddNumbers(oddNumber);


//8 Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

const changePlace = [1,2,3,4, 5, 6, 7, 8]

const changePlaceOfArray2 = (array) => {
    for(let i = 0; i < array.length / 2; i++) {
        array.push(array.shift());
    }
    console.log(array)
}
changePlaceOfArray2(changePlace)


//9 Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

const sortArray = [188, 1259, 102, 102, 10, 12, 84, 1, 0, 2, 3, 9, 7]

//Пузырьком


const bubbleSort = (array) => {
    for (let n = 0; n < array.length; n++){
        for (let i = 0; i < array.length - 1 - n; i++){
            if (array[i] > array[i + 1]){
                let buff = array[i];
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
        }
    }
    console.log(sortArray)
}
bubbleSort(sortArray)


// Выбором



const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

console.log(selectionSort(sortArray))

// Вставками

const insertSort = (array) => {
    let value = array.length;

    for(let i = 0; i < value; i++) {
        let value = array[i];
        let temp = i - 1;

        while(temp >= 0 && array[temp] > value) {
            array[temp + 1] = array[temp];
            temp--;
            array[temp + 1] = value;
        }
    }
    return array;
}

console.log(insertSort(sortArray))