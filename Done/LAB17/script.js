// Функция camelize
function camelize(str) {
    return str
      .split('-')
      .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  }
  
  // Функция filterRange
  function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
  }
  
  // Функция filterRangeInPlace
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  
  // Функция copySorted
  function copySorted(arr) {
    return arr.slice().sort();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Task 1
    const task1Result = document.getElementById('task1-result');
    const str1 = "background-color";
    task1Result.textContent = camelize(str1);
  
    // Task 2
    const task2Result = document.getElementById('task2-result');
    const arr2 = [5, 3, 8, 1];
    const filtered2 = filterRange(arr2, 1, 4);
    task2Result.textContent = filtered2.join(', ');
  
    // Task 3
    const task3Result = document.getElementById('task3-result');
    const arr3 = [5, 3, 8, 1];
    filterRangeInPlace(arr3, 1, 4);
    task3Result.textContent = arr3.join(', ');
  
    // Task 4
    const task4Result = document.getElementById('task4-result');
    const arr4 = ["HTML", "JavaScript", "CSS"];
    const sorted4 = copySorted(arr4);
    task4Result.textContent = sorted4.join(', ');
  
    // Task 5
    const task5Result = document.getElementById('task5-result');
    const vasya = { name: "Вася", age: 25 };
    const petya = { name: "Петя", age: 30 };
    const masha = { name: "Маша", age: 28 };
    const users = [vasya, petya, masha];
    const names = users.map(user => user.name);
    task5Result.textContent = names.join(', ');
  });
  