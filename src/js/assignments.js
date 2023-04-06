import ExternalServices from "./ExternalServices.mjs";
import displayDay from "./showday.mjs";
import { getLocalStorage } from "./utils.mjs";
import AssignmentDetails from "./assignmentsClass.mjs";
const baseURL = "/json/assignments.json";

displayDay("date")

const dataSource = new ExternalServices(baseURL);

const student = getLocalStorage("account");

if (student){
    const assignments = new AssignmentDetails(student, dataSource);
    
    document.title = student + " | VioLearn";
    
    assignments.init();
}
 else {
    const h1 = document.createElement("h1");
    const login = document.createElement("a");
    h1.textContent = `Log to view your assignments`;
    login.textContent = `Login`;
    login.href = "/login/";
    login.classList.add("account");
    document.getElementById("assignments").appendChild(h1);
    document.getElementById("assignments").appendChild(login);
 }