
	var trigger=0, name, age, sex, county, education, mathematic, asu, cutting, programming, gcode; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			name = prompt("Введите имя");
			age = prompt("Введите возраст");
			sex = prompt("Введите пол");
			county = prompt("Гражданство");
			education = confirm("Шутите ли вы про евреев?");
			mathematic = confirm("Знаете древнерусский?");
			asu = confirm("Шутите ли вы про негров?");
			cutting = confirm("Вы учитесь?");
			programming = confirm("Вы коммуникабельны?");
			gcode = confirm("Угадайте да или нет");
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#county").val(county)
			$("#county").focus();
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			document.getElementById("gcode").checked = gcode;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("education").checked ==true && document.getElementById("asu").checked ==true && document.getElementById("gcode").checked ==true)
		{
       		var text ='<p class="stroke">Ура победа!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">Пу-пуу-пуууу!</p>'
		x.innerHTML = text;
			}
		}
		}
