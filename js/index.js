class BaseCharacter {
  constructor(name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.ap = ap;
    this.alive = true;
  }
  attack(character, damage) {
    if (this.alive == false) {
      return;
    }
    character.getHurt(damage);
  }

  getHurt(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.die()
    }
  }
  die() {
    this.alive = false;  //一個 '=' 是在設定
  }
}

class Hero extends BaseCharacter {
  constructor(name, hp, ap) {
    super(name, hp, ap);
    console.log("召喚英雄 " + this.name + " ！")
  }
  attack(character) {
    var damage = Math.random() * (this.ap / 2) + (this.ap / 2);
    super.attack(character, Math.floor(damage));
    //計算好傷害值是多少後，用 Math.floor 取整數
  }
}

class Monster extends BaseCharacter {
  constructor(name, hp, ap) {
    super(name, hp, ap);
    console.log("怪物 " + this.name + " 出現！")
  }
  attack(character) {
    var damage = Math.random() * (this.ap/2) + (this.ap/2);
    super.attack(character, Math.floor(damage));
  }
}

var monster = new Monster("Skeleton", 130, 10);
var hero = new Hero("Bernard", 130, 30);
