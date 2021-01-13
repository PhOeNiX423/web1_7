        // ---------------- Задача 1. Приведение типов данных ---------------
        // ------------------------- типы переменных ------------------------
        function types() {
            // тип string
            console.log('Типы данных');
            let str = 'Hello'
            console.log(str);
            // тип number
            let age = 28
            console.log(age);
            // тип boolean
            let logic = true
            console.log(logic);
            // тип undefined
            let undef
            console.log(undef);
            // тип null
            let n = 29
            console.log(n);
            let nu = null
            console.log(nu);
            alert('Загляните в консоль!');
        }
        // ----------------------- Преобразования ---------------------------
        function Zadanie1() {
            console.log('Преобразования');
            console.log(true + 'test'); // boolean + string = string
            console.log('123' + undefined); // string + undefined = string
            console.log(1 + 4); // number + number = number
            console.log('5' + 1); // string + number = string
            console.log('5' - 1); // string - number = number
            console.log('foo' + 'foo'); // string + string (два одинаковых значения) = string
            console.log('al' + 'luminium'); // string + string (два разных значения) = string
            console.log('5' - '1'); // string - string = number
            console.log('5' + '2'); // string + string = string 
            alert('Загляните в консоль!');
        }
        // ---------------- Задача 2. Прямоугольник --------------------------
        function Zadanie2() {
            let st1 = prompt('Введите первую сторону прямоугольника: ');
            let st2 = prompt('Введите вторую сторону прямоугольника: ');
            console.log('Вы ввели такие стороны: ', st1, ' ', st2);
            console.log('Периметр прямоугольника равен: ', st1 * 2 + st2 * 2);
            console.log('Площадь прямоугольника равна: ', st1 * st2);
            console.log('Отношение сторон прямоугольника равно: ', st1 / st2);
            alert('Загляните в консоль!');
        }
        // ----------- Задача 3. Конвертация единиц измерения -----------------
        function Zadanie3() {
            let cels = prompt('Введите Цельсии: ');
            let celsnum = Number(cels);
            let first = `${cels} \u00B0C соответсвует ${celsnum * 1.8 + 32} \u00B0F`;
            console.log(first);
            let faren = prompt('Введите Фаренгейты: ');
            let farennum = Number(faren);
            let second = `${faren} \u00B0F соответсвует ${(farennum - 32) / 1.8} \u00B0C`;
            console.log(second);
            alert('Загляните в консоль!');
        }
        // ----------- Задача 4. Високосный год -------------------------------
        function Zadanie4() {
            let god = prompt('Введите год: ');
            let result = 0;
            result = (god % 4) == 0 ? (res = true) :
                (god % 100) == 0 ? (res = true) :
                (god % 400) == 0 ? (res = true) : (res = false);
            if (res == true) {
                console.log(god + ' - Год високосный');
            }
            if (res == false) {
                console.log(god + ' - Год не високосный');
            }
            alert('Загляните в консоль!');
        }
        // ----------- Задача 5. Проверка -------------------------------------
        function Zadanie5() {
            let first = prompt('Введите первое число: ');
            first = Number(first);
            let second = prompt('Введите второе число: ');
            second = Number(second);
            let sum = first + second;
            let result = ((first == 10 || second == 10) || (sum == 10)) ? console.log('True') : console.log('False');
            alert('Загляните в консоль!');
        }
