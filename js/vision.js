var words = 
[
  "1: 明日やれることは明日やるべし",
  "2: レポートやるよりくねくねしよう",
  "3: 課題は温めすぎて溶かすべし",
  "4: 頑張っても，だらだらやっても，作品が完成するのはハッカソンの最終日",
  "5: そういうときは美味しいものをたべよう",
  "6: だから恋人ができないんじゃない?",
  "7: カロリーは熱に弱いので，夏なら何を食べてもカロリーゼロ",
  "8: 午後の紅茶を午前に飲み，めざましテレビを午後に見る",
  "9: 夜に駆けて朝に後悔する",
];

function vision() {
  console.log(parseInt(Math.random() * words.length)); // デバッグ用
  document.getElementById('vision-result').innerHTML = words[parseInt(Math.random() * words.length)];
}
