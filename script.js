        // ---------------- Задача 1. Приведение типов данных ---------------
        // ------------------------- типы переменных ------------------------
        function types() {
            // тип string
            console.log('Типы данных');
            var str = 'Hello'
            console.log(str);
            // тип number
            var age = 28
            console.log(age);
            // тип boolean
            var logic = true
            console.log(logic);
            // тип undefined
            var undef
            console.log(undef);
            // тип null
            var n = 29
            console.log(n);
            var n = null
            console.log(n);
            alert('Загляните в консоль!');
        }
        // ----------------------- Преобразования ---------------------------
        function Zadanie1() {
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
            var st1 = prompt('Введите первую сторону прямоугольника: ');
            var st2 = prompt('Введите вторую сторону прямоугольника: ');
            console.log('Вы ввели такие стороны: ', st1, ' ', st2);
            console.log('Периметр прямоугольника равен: ', st1 * 2 + st2 * 2);
            console.log('Площадь прямоугольника равна: ', st1 * st2);
            console.log('Отношение сторон прямоугольника равно: ', st1 / st2);
            alert('Загляните в консоль!');
        }
        // ----------- Задача 3. Конвертация единиц измерения -----------------
        function Zadanie3() {
            var cels = prompt('Введите Цельсии: ');
            celsnum = Number(cels);
            var faren = celsnum * 1.8 + 32;
            var farenstr = faren.toString();
            console.log(cels, '\u00B0C соответсвует', farenstr, '\u00B0F');
            var faren = prompt('Введите Фаренгейты: ');
            farennum = Number(faren);
            var cels = (farennum - 32) / 1.8;
            var celsstr = cels.toString();
            console.log(farenstr, '\u00B0F соответсвует', celsstr, '\u00B0C');
            alert('Загляните в консоль!');
        }
        // ----------- Задача 4. Високосный год -------------------------------
        function Zadanie4() {
            var god = prompt('Введите год: ');
            var result = 0;
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
            var first = prompt('Введите первое число: ');
            first = Number(first);
            var second = prompt('Введите второе число: ');
            second = Number(second);
            var sum = first + second;
            if (first == 10 || second == 10) {
                console.log('True');
            } else if (sum == 10) {
                console.log('True');
            } else {
                console.log('False');
            }
            alert('Загляните в консоль!');
        }
