// フォームの要素
const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputBirthday = document.getElementById("birthday");
const inputEmail = document.getElementById("email");

// テーブルの要素
const tableData = document.getElementById("data");

// フォームが送信された時の処理
form.addEventListener("submit", (e)=> {
  // submitイベントを止める
  e.preventDefault();

  //tr要素を作成
  const tr = document.createElement("tr");

  // td要素を作成
  const nameColumn = document.createElement("td");
  const birthdayColumn = document.createElement("td");
  const emailColumn = document.createElement("td");

  // td要素にインプットの値を入れる
  nameColumn.textContent = inputName.value;
  birthdayColumn.textContent = inputBirthday.value;
  emailColumn.textContent = inputEmail.value;

  // td要素をtr要素の中に入れる
  tr.appendChild(nameColumn);
  tr.appendChild(birthdayColumn);
  tr.appendChild(emailColumn);
 
  // tr要素をtbody要素に入れる
  tableData.appendChild(tr);

  // インプットの中身をリセット
  inputName.value = "";
  inputBirthday.value = "";
  inputEmail.value = "";
})