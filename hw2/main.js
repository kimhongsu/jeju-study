// function reverseOrder(arr) {
//     return [...arr].map(a.pop, a);
// }

function reverse(arr) {
    let tempArr = [];

    for (i = 0; i < arr.length; i++) {  // arr 길이(요수의 수)만큼 반복
        tempArr[i] = arr[arr.length - i - 1];
        // tempArr[0] = arr[3 - 0 - 1] = arr[2]
        // tempArr[1] = arr[3 - 1 - 1] = arr[1]
        // tempArr[2] = arr[3 - 2 - 1] = arr[0]
    }

    return tempArr // arr 배열의 순서와 반대가 되는 새로운 배열
}

function toTable(arr) {
    dataArr = arr.map(item => `<tr>${item.map(it => `<td>${it}</td>`).join('')}</tr>`)
    dataHTML = dataArr.join('');
    return `<table border="1"><tbody>${dataHTML}</tbody></table>`;
}

// function listNumbers(height, width) {
//     // n: height, m: witdh
//     // n, m < 100
//     if (height > 100 || width > 100) {   // || : or operator
//         // error
//     }

//     h = 1;  // Number type
//     arr = [];
//     for (n = 0; n < height; n++) {
//         temp = [];
//         for (m = 0; m < width; m++) {
//             temp.push(h);
//             h = h + 1;
//         }
//         if (n % 2 == 1) {
//             // temp.sort().reverse();
//             temp = reverse(temp)
//         }
//         arr.push(temp.join(' '));
//     }
//     return arr.join('\n');
// }

function listNumbers(height, width) {
    // n: height, m: witdh
    // n, m < 100
    if (height > 100 || width > 100) {   // || : or operator
        // error
    }

    h = 1;  // Number type
    arr = [];
    for (n = 0; n < height; n++) {
        temp = [];
        for (m = 0; m < width; m++) {
            temp.push(h);
            h = h + 1;
        }
        if (n % 2 == 1) {
            // temp.sort().reverse();
            temp = reverse(temp)
        }
        arr.push(temp);
    }
    return arr;
}

const form = document.getElementById("homework");
const button = document.getElementById("homework-submit");
const table = document.getElementById("result");

button.addEventListener("click", (event) => {
    event.preventDefault()
    const height = form.height.value;
    const width = form.width.value;

    const numbers = listNumbers(height, width);
    console.log(numbers);

    tableHTML = toTable(numbers);
    console.log(tableHTML);
    table.innerHTML = tableHTML;
})

