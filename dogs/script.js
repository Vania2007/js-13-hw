class Dog {
  name;
  age;
  weight;
  image;
  openInfo() {
    let width = 450;
    let height = 380;
    let leftpos = (screen.width - width) / 2;
    let toppos = (screen.height - height) / 2;
    let w = window.open(
      `Dog.html`,
      `Dog`,
      `height=${height}, width=${width}, left=${leftpos}, top=${toppos}`
    );
    w.document.write(`<h1>${this.name}</h1>`);
    w.document.write(`<img src="./images/${this.name}.jpg" alt="" />`);
    w.document.write(`<p>Вік: ${this.age} років</p>`);
    w.document.write(`<p>Вага: ${this.weight} кг</p>`);
    w.document
      .write(`<pre><strong>Послання від твого майбутнього друга:</strong>
  Дуже хочу в нову сім'ю, сподіваюсь це будете Ви!</pre>`);
    w.document.write(
      `<p><input type=button value="Close" onclick="window.close()"/></p>`
    );
  }
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

document.write(
  "<table><tr><th>Ім'я</th><th>Вік</th><th>Вага</th><th>Зображення</th><th>Додаткова інформація</th></tr>"
);
for (let i = 0; i < dogs.length; i++) {
  document.write(
    `<tr><td>${dogs[i].name}</td><td>${dogs[i].age}</td><td>${dogs[i].weight}</td><td><img src="${dogs[i].image}" width='100'></td><td><input type="button" value="Показати інформацію" onclick="dogs[${i}].openInfo()"></input></td></tr>`
  );
}
document.write("</table>");

function printDogsInfo() {
  document.getElementById("printBtn").style.display = "none";
  window.print();
}
