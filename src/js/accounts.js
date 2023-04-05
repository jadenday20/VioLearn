import { getLocalStorage, setLocalStorage } from "./utils.mjs";
const baseURL = "/json/accounts.json";

function renderAccounts() {
  const currAccount = getLocalStorage("account");
  const accountsHTML = document.getElementById("accountsMessage");
  if (currAccount) {
    accountsHTML.innerHTML = `<p>Hi ${currAccount}!</p>
                                  <p>Select from the accounts below to switch accounts</p>`;
  } else {
    accountsHTML.innerHTML =
      "<p>Please select from the accounts below to log in</p>";
  }
}

fetch(baseURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const accounts = jsonObject["accounts"];

    setLocalStorage("accountnum", -1);
    accounts.forEach(displayAccount);
    localStorage.removeItem("accountnum");

    var form = document.getElementById("login");
    form.addEventListener("submit", checkpassword);

    function checkpassword(event) {
      if (
        document.getElementById("login").accountPass.value ==
        accounts[getLocalStorage("tempaccountnum")].Password
      ) {
        setLocalStorage("account", getLocalStorage("tempName"));
        localStorage.removeItem("tempName");
        localStorage.removeItem("tempaccountnum");
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    }
  });

function displayAccount(account) {
  setLocalStorage("accountnum", getLocalStorage("accountnum") + 1);
  const accountsHTML = document.getElementById("accounts");
  const newAccountButton = document.createElement("button");
  newAccountButton.classList.add("account");
  newAccountButton.addEventListener("click", login, false);
  newAccountButton.name = account.name;
  newAccountButton.accountnum = getLocalStorage("accountnum");
  newAccountButton.innerHTML = account.name;
  // const newAccount =
  // `<button class='account' onclick='login(${account.name})'>
  // ${account.name}
  // </button>`;
  accountsHTML.appendChild(newAccountButton);

  function login(accountName) {
    document.getElementById("account-header").textContent =
      accountName.currentTarget.name + " Login";
    document.getElementById("login").classList.toggle("toggleOff");
    document.getElementById("login-bg").classList.toggle("toggleTransparent");
    const body = document.getElementById("login-bg");
    setTimeout(() => {
      body.addEventListener("click", toggleLogin, false);
    }, 100);
    setLocalStorage("tempName", accountName.currentTarget.name);
    setLocalStorage("tempaccountnum", accountName.currentTarget.accountnum);
  }

  function toggleLogin() {
    document.getElementById("login").classList.add("toggleOff");
    document.getElementById("login-bg").classList.toggle("toggleTransparent");
    document
      .getElementById("login-bg")
      .removeEventListener("click", toggleLogin);
  }
}

renderAccounts();
