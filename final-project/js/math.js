export function onLoadMarket() {
  window.addEventListener("load", (event) => {
    console.log("The page has fully loaded");
    const requestURL = "https://api.metals.live/v1/spot";
    var platinum = 0;
    var gold = 0;
    var silver = 0;
    async function getMetal() {
      const APIResponse = await fetch(requestURL);
      const gitHubUser = await APIResponse.json();
      platinum = parseFloat(gitHubUser[2].platinum);
      gold = parseFloat(gitHubUser[0].gold);
      silver = parseFloat(gitHubUser[1].silver);
      document.getElementById("platCurrent1").textContent = `$${platinum}`;
      document.getElementById("goldCurrent1").textContent = `$${gold}`;
      document.getElementById("silverCurrent1").textContent = `$${silver}`;
    }
    getMetal();
  });
}

export async function mathSubmit() {
  const requestURL = "https://api.metals.live/v1/spot";
  var platinum = 0;
  var gold = 0;
  var silver = 0;
  var markup = 2.75;

  var volumeNumber = parseFloat(document.getElementById("volumeNumber").value);
  var diamondMeleeCTW = parseFloat(document.getElementById("diamondMeleeCTW").value);
  var stoneCount = parseFloat(document.getElementById("stoneCount").value);
  var otherStones = parseFloat(document.getElementById("otherStones").value);
  var otherLabor = parseFloat(document.getElementById("otherLabor").value);

  var output1 = document.getElementById("mathOutput1");
  var output2 = document.getElementById("mathOutput2");
  var output3 = document.getElementById("mathOutput3");
  var output4 = document.getElementById("mathOutput4");
  var output5 = document.getElementById("mathOutput5");
  var output6 = document.getElementById("mathOutput6");
  var output7 = document.getElementById("mathOutput7");
  var output8 = document.getElementById("mathOutput8");
  var output9 = document.getElementById("mathOutput9");
  var output10 = document.getElementById("mathOutput10");
  var output11 = document.getElementById("mathOutput11");
  var output12 = document.getElementById("mathOutput12");

  const APIResponse = await fetch(requestURL);
  const gitHubUser = await APIResponse.json();
  platinum = parseFloat(gitHubUser[2].platinum);
  gold = parseFloat(gitHubUser[0].gold);
  silver = parseFloat(gitHubUser[1].silver);
  document.getElementById("platCurrent1").textContent = `$${platinum}`;
  document.getElementById("goldCurrent1").textContent = `$${gold}`;
  document.getElementById("silverCurrent1").textContent = `$${silver}`;

  var diamondPPC = [
    ["vsNat", 900],
    ["siNat", 800],
    ["vsLab", 550],
    ["siLab", 500],
  ];

  var metalAdjustersChanged = [
    ["plat", 0.0207, 0.95],
    ["18kt", 0.01549, 0.75],
    ["14kt", 0.01284, 0.585],
    ["10kt", 0.01139, 0.416],
    ["silver", 0.0104, 0.925],
  ];

  var metalAdjusters = [
    ["plat", 0.02490, 0.95],
    ["18kt", 0.0178135, 0.75],
    ["14kt", 0.0142524, 0.585],
    ["10kt", 0.012529, 0.416],
    ["silver", 0.013, 0.925],
  ];

  var labor = [
    ["stoneSetting", 3.3],
    ["rhodium", 7.5],
    ["texture", 10],
    ["CAD", 90],
    ["CAM", 45],
  ];

  function diamondPrice(ppc, input) {
    return ((ppc * input) * markup) + otherStones;
  
  }

  function metalPrice(adjuster, volume, market, karat) {
    return ((volume * adjuster) + 1) * ((market / 31.1) * karat) * markup;
  }

  function laborCalculator(count, otherLabor) {
    var settingPrice = labor[0][1];
    var miscLabor = labor[1][1] + labor[2][1] + labor[3][1] + labor[4][1];
    return ((count * settingPrice + miscLabor) * markup) + otherLabor;
  }

  let platNatVsTotal =
    metalPrice(
      metalAdjusters[0][1],
      volumeNumber,
      platinum,
      metalAdjusters[0][2]
    ) +
    diamondPrice(diamondPPC[0][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output1.innerHTML = `Natural VS diamonds ~~ $${platNatVsTotal.toFixed(2)} ~~`;

  let platNatSiTotal =
    metalPrice(
      metalAdjusters[0][1],
      volumeNumber,
      platinum,
      metalAdjusters[0][2]
    ) +
    diamondPrice(diamondPPC[1][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output2.innerHTML = `Natural SI diamonds ~~ $${platNatSiTotal.toFixed(2)} ~~`;

  let platLabVsTotal =
    metalPrice(
      metalAdjusters[0][1],
      volumeNumber,
      platinum,
      metalAdjusters[0][2]
    ) +
    diamondPrice(diamondPPC[2][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output3.innerHTML = `Lab-grown VS diamonds ~~ $${platLabVsTotal.toFixed(2)} ~~`;

  let platLabSiTotal =
    metalPrice(
      metalAdjusters[0][1],
      volumeNumber,
      platinum,
      metalAdjusters[0][2]
    ) +
    diamondPrice(diamondPPC[3][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output4.innerHTML = `Lab-grown SI diamonds ~~ $${platLabSiTotal.toFixed(2)} ~~`;

  let goldNatVsTotal =
    metalPrice(metalAdjusters[2][1], volumeNumber, gold, metalAdjusters[2][2]) +
    diamondPrice(diamondPPC[0][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output5.innerHTML = `Natural VS diamonds ~~ $${goldNatVsTotal.toFixed(2)} ~~`;

  let goldNatSiTotal =
    metalPrice(metalAdjusters[2][1], volumeNumber, gold, metalAdjusters[2][2]) +
    diamondPrice(diamondPPC[1][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output6.innerHTML = `Natural SI diamonds ~~ $${goldNatSiTotal.toFixed(2)} ~~`;

  let goldLabVsTotal =
    metalPrice(metalAdjusters[2][1], volumeNumber, gold, metalAdjusters[2][2]) +
    diamondPrice(diamondPPC[2][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output7.innerHTML = `Lab-grown VS diamonds ~~ $${goldLabVsTotal.toFixed(2)} ~~`;

  let goldLabSiTotal =
    metalPrice(metalAdjusters[2][1], volumeNumber, gold, metalAdjusters[2][2]) +
    diamondPrice(diamondPPC[3][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output8.innerHTML = `Lab-grown SI diamonds ~~ $${goldLabSiTotal.toFixed(2)} ~~`;

  let silverNatVsTotal =
    metalPrice(
      metalAdjusters[4][1],
      volumeNumber,
      silver,
      metalAdjusters[4][2]
    ) +
    diamondPrice(diamondPPC[0][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output9.innerHTML = `Natural VS diamonds ~~ $${silverNatVsTotal.toFixed(2)} ~~`;

  let silverNatSiTotal =
    metalPrice(
      metalAdjusters[4][1],
      volumeNumber,
      silver,
      metalAdjusters[4][2]
    ) +
    diamondPrice(diamondPPC[1][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output10.innerHTML = `Natural SI diamonds ~~ $${silverNatSiTotal.toFixed(2)} ~~`;

  let silverLabVsTotal =
    metalPrice(
      metalAdjusters[4][1],
      volumeNumber,
      silver,
      metalAdjusters[4][2]
    ) +
    diamondPrice(diamondPPC[2][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output11.innerHTML = `Lab-grown VS diamonds ~~ $${silverLabVsTotal.toFixed(2)} ~~`;

  let silverLabSiTotal =
    metalPrice(
      metalAdjusters[4][1],
      volumeNumber,
      silver,
      metalAdjusters[4][2]
    ) +
    diamondPrice(diamondPPC[3][1], diamondMeleeCTW) +
    laborCalculator(stoneCount, otherLabor);
  output12.innerHTML = `Lab-grown SI diamonds ~~ $${silverLabSiTotal.toFixed(2)} ~~`;
}
