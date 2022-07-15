const obj = {
  name: "Kairat",
  dateofbirth: new Date(),
  age: 24,
};

class PassportInfo {
  constructor(name, dateofbirth, age) {
    this.name = name;
    this.dateofbirth = dateofbirth;
    this.age = age;
  }

  name = "asdasdml";

  add(params) {
    console.log(this.name)
  }
}

const me = new PassportInfo("Kairat", "25.04", 24);

me.sdf = "dsfs";

me.add();
