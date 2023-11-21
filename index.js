const producers = [
  {
    id: "workerId",
    name: "hire a worker",
    cost: 25,
    rate: 1,
    count: 0,
    icon: "fa-solid fa-person",
  },
  {
    id: "cowId",
    name: "buy an extra cow",
    cost: 40,
    rate: 2,
    count: 0,
    icon: "fa-solid fa-cow",
  },
  {
    id: "farmId",
    name: "buy another farm",
    cost: 150,
    rate: 10,
    count: 0,
    icon: "fa-solid fa-tractor",
  },
  {
    id: "ceoId",
    name: "become the CEO of Big Milk",
    cost: 1000,
    rate: 100,
    count: 0,
    icon: "fa-solid fa-building",
  },
  {
    id: "cowId",
    name: "buy cow planet",
    cost: 50000,
    rate: 1000,
    count: 0,
    icon: "fa-solid fa-globe",
  },
  {
    id: "multiverseId",
    name: "Rule the Multiverse of milk producing planets",
    cost: 1000000,
    rate: 10000,
    count: 0,
    icon: `<i class="fa-solid fa-infinity"></i>,`,
  },
];

const cashCounter = document.getElementById("cash-counter");
let cash = 0;
cashCounter.textContent = `$${parseFloat(cash).toPrecision(3)}`;
let bottle = 0;
let value = 0;
let value1 = parseFloat(value).toPrecision(2);
const bottleCounter = document.getElementById("bottleCounter");
const cow = document.getElementById("cow");
const sellMilk = document.getElementById("sellMilk");
const buyContainer = document.getElementById("buy-container");
const outercontainer = document.getElementById("last-container");
function render() {
  if (cash >= 0 && cash <= 10) {
    cashCounter.textContent = `$${parseFloat(cash).toPrecision(3)}`;
    bottleCounter.textContent = `${bottle}`;
  } else if (cash > 10 && cash <= 100) {
    cashCounter.textContent = `$${parseFloat(cash).toPrecision(4)}`;
    bottleCounter.textContent = `${bottle}`;
  } else if (cash > 100 && cash <= 1000) {
    cashCounter.textContent = `$${parseFloat(cash).toPrecision(6)}`;
    bottleCounter.textContent = `${bottle}`;
  } else if (cash > 1000) {
    cashCounter.textContent = `$${parseFloat(cash).toPrecision(7)}`;
    bottleCounter.textContent = `${bottle}`;
  }
  if (value1 >= 0 && value1 <= 10) {
    sellMilk.textContent = `Sell milk +$${parseFloat(value1).toPrecision(3)}`;
  } else if (value1 > 10 && value1 <= 100) {
    sellMilk.textContent = `Sell milk +$${parseFloat(value1).toPrecision(4)}`;
  } else if (value1 > 100 && value1 <= 1000) {
    sellMilk.textContent = `Sell milk +$${parseFloat(value1).toPrecision(6)}`;
  } else if (value1 > 1000) {
    sellMilk.textContent = `Sell milk +$${parseFloat(value1).toPrecision(7)}`;
  }

  if (cash < 25) {
    hire.style.visibility = "hidden";
  }
  if (cash < 40) {
    extraCow.style.visibility = "hidden";
  }
  if (cash < 150) {
    extraFarm.style.visibility = "hidden";
  }
  if (cash < 1000) {
    ceo.style.visibility = "hidden";
  }
  if (cash < 50000) {
    cowPlanet.style.visibility = "hidden";
  }
  if (cash < 1000000) {
    multiverse.style.visibility = "hidden";
  }
  if (cash >= 25) {
    console.log(cash);
    hire.style.visibility = "visible";
  }
  if (cash >= 40) {
    extraCow.style.visibility = "visible";
  }
  if (cash >= 150) {
    extraFarm.style.visibility = "visible";
  }
  if (cash >= 1000) {
    ceo.style.visibility = "visible";
  }
  if (cash >= 50000) {
    cowPlanet.style.visibility = "visible";
  }
  if (cash >= 1000000) {
    multiverse.style.visibility = "visible";
  }
}
cow.addEventListener("click", function () {
  bottle += 1;
  value1 = Number(value1) + 0.5;

  sellMilk.style.visibility = "visible";

  render();
});
const hire = document.getElementById("extraWorker");

const extraCow = document.getElementById("extraCow");
const extraFarm = document.getElementById("extraFarm");
const ceo = document.getElementById("ceo");
const cowPlanet = document.getElementById("cowPlanet");
const multiverse = document.getElementById("multiverse");

let hireAvatar = document.createElement("div");
let hireTag = document.createElement("i");
hireTag.className = producers[0].icon;
hireAvatar.appendChild(hireTag);
let hireCount = document.createElement("span");
hireAvatar.appendChild(hireCount);
let hireBottles = document.createElement("span");
hireAvatar.appendChild(hireBottles);
let hireAppend = false;

let cowAvatar = document.createElement("div");
let cowTag = document.createElement("i");
cowTag.className = producers[1].icon;
cowAvatar.appendChild(cowTag);
let cowCount = document.createElement("span");
cowAvatar.appendChild(cowCount);
let cowBottles = document.createElement("span");
cowAvatar.appendChild(cowBottles);
let cowAppend = false;

let farmAvatar = document.createElement("div");
let farmTag = document.createElement("i");
farmTag.className = producers[2].icon;
farmAvatar.appendChild(farmTag);
let farmCount = document.createElement("span");
farmAvatar.appendChild(farmCount);
let farmBottles = document.createElement("span");
farmAvatar.appendChild(farmBottles);
let farmAppend = false;

let ceoAvatar = document.createElement("div");
let ceoTag = document.createElement("i");
ceoTag.className = producers[3].icon;
ceoAvatar.appendChild(ceoTag);
let ceoCount = document.createElement("span");
ceoAvatar.appendChild(ceoCount);
let ceoBottles = document.createElement("span");
ceoAvatar.appendChild(ceoBottles);
let ceoAppend = false;

let cowPlanetAvatar = document.createElement("div");
let cowPlanetTag = document.createElement("i");
cowPlanetTag.className = producers[4].icon;
cowPlanetAvatar.appendChild(cowPlanetTag);
let cowPlanetCount = document.createElement("span");
cowPlanetAvatar.appendChild(cowPlanetCount);
let cowPlanetBottles = document.createElement("span");
cowPlanetAvatar.appendChild(cowPlanetBottles);
let cowPlanetAppend = false;

let multiverseAvatar = document.createElement("div");
let multiverseTag = document.createElement("i");
multiverseTag.className = producers[5].icon;
multiverseAvatar.appendChild(multiverseTag);
let multiverseCount = document.createElement("span");
multiverseAvatar.appendChild(multiverseCount);
let multiverseBottles = document.createElement("span");
multiverseAvatar.appendChild(multiverseBottles);

sellMilk.addEventListener("click", function () {
  cash = cash + Number(value1);
  bottle = 0;
  value1 = 0;
  render();
});

hire.addEventListener("click", function () {
  if (cash >= 25) {
    cash -= 25;
    producers[0].count += 1;

    if (hireAppend == false) {
      outercontainer.appendChild(hireAvatar);
      hireAppend = true;
    }

    hireCount.textContent = `${producers[0].count}`;
    hireBottles.textContent = `+${producers[0].count * 1} bottles/sec`;
  }
});

extraCow.addEventListener("click", function () {
  if (cash >= 40) {
    extraCow.style.visibility = "visible";
    cash -= 40;
    producers[1].count += 1;

    if (cowAppend == false) {
      outercontainer.appendChild(cowAvatar);
      cowAppend = true;
    }

    cowCount.textContent = `${producers[1].count}`;
    cowBottles.textContent = `+${producers[1].count * 2} bottles/sec`;
  }
});

extraFarm.addEventListener("click", function (e) {
  if (cash >= 150) {
    cash -= 150;
    producers[2].count += 1;

    if (farmAppend == false) {
      outercontainer.appendChild(farmAvatar);
      farmAppend = true;
    }

    farmCount.textContent = `${producers[2].count}`;
    farmBottles.textContent = `+${producers[2].count * 10} bottles/sec`;
  }
});

ceo.addEventListener("click", function () {
  if (cash >= 1000) {
    cash -= 1000;
    producers[3].count += 1;

    if (ceoAppend == false) {
      outercontainer.appendChild(ceoAvatar);
      ceoAppend = true;
    }

    ceoCount.textContent = `${producers[3].count}`;
    ceoBottles.textContent = `+${producers[3].count * 100} bottles/sec`;
  }
});

cowPlanet.addEventListener("click", function () {
  if (cash >= 50000) {
    cash -= 50000;
    producers[4].count += 1;

    if (cowPlanetAppend == false) {
      outercontainer.appendChild(cowPlanetAvatar);
      cowPlanetAppend = true;
    }

    cowPlanetCount.textContent = `${producers[4].count}`;
    cowPlanetBottles.textContent = `+${producers[4].count * 1000} bottles/sec`;
  }
});
multiverse.addEventListener("click", function () {
  if (cash >= 100000) {
    cash -= 100000;
    producers[5].count += 1;

    if (multiverseAppend == false) {
      outercontainer.appendChild(multiverseAvatar);
      multiverseAppend = true;
    }

    multiverseCount.textContent = `${producers[0].count}`;
    multiverseBottles.textContent = `+${
      producers[0].count * 10000
    } bottles/sec`;
  }
});

let interval = setInterval(function () {
  if (producers[0].count > 0) {
    bottle += producers[0].count * producers[0].rate;

    value1 += producers[0].count * (1 * 0.5);
  }
  if (producers[1].count > 0) {
    bottle += producers[1].count * producers[1].rate;
    console.log("cow count" + producers[1].count);
    value1 += Math.round(producers[1].count * (2 * 0.5));
  }
  if (producers[2].count > 0) {
    bottle += producers[2].count * producers[2].rate;
    value1 += Math.round(producers[2].count * (10 * 0.5));
  }
  if (producers[3].count > 0) {
    bottle += producers[3].count * producers[3].rate;
    value1 += Math.round(producers[3].count * (100 * 0.5));
  }
  if (producers[4].count > 0) {
    bottle += producers[4].count * producers[4].rate;
    value1 += Math.round(producers[4].count * (100 * 0.5));
  }
  if (producers[5].count > 0) {
    bottle += producers[5].count * producers[5].rate;
    value1 += Math.round(producers[5].count * (10000 * 0.5));
  }

  render();
}, 1000);
