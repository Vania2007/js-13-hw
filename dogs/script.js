class Dog {
  name;
  age;
  weight;
  image;
}
let belka = new Dog();
belka.name = "Belka";
belka.age = 10;
belka.weight = 5;
belka.image = "./images/belka.jpg";

let black = new Dog();
black.name = "Black";
black.age = 3;
black.weight = 15;
black.image = "./images/black.jpg";

let jack = new Dog();
jack.name = "Jack";
jack.age = 7;
jack.weight = 20;
jack.image = "./images/jack.jpg";

let rex = new Dog();
rex.name = "Rex";
rex.age = 11;
rex.weight = 25;
rex.image = "./images/rex.jpg";
let dogs = [belka, black, jack, rex];

function openInfo(name, width, height) {
  let leftpos = (screen.width - width) / 2;
  let toppos = (screen.height - height) / 2;
  window.open(
    `${name}.html`,
    `${name}`,
    `width=${width},height=${height}, left=${leftpos}, top=${toppos}`
  );
}

document.write(
  "<table><tr><th>Ім'я</th><th>Вік</th><th>Вага</th><th>Зображення</th><th>Додаткова інформація</th></tr>"
);
for (let i = 0; i < dogs.length; i++) {
  document.write(
    `<tr><td>${dogs[i].name}</td><td>${dogs[i].age}</td><td>${dogs[i].weight}</td><td><img src="${dogs[i].image}" width='100'></td><td><input type="button" value="Показати інформацію" onclick="openInfo('${dogs[i].name}', 600, 500)"></input></td></tr>`
  );
}
document.write("</table>");

function printDogsInfo() {
  document.getElementById("printBtn").style.display = "none";
  window.print();
}
