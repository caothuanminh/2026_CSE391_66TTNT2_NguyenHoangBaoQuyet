let students = [];

let nameInput = document.getElementById("name");
let scoreInput = document.getElementById("score");
let tableBody = document.getElementById("tableBody");
let summary = document.getElementById("summary");

let searchInput = document.getElementById("search");
let filterSelect = document.getElementById("filter");
let sortBtn = document.getElementById("sortScore");

let sortAsc = true;

document.getElementById("addBtn").addEventListener("click", addStudent);
searchInput.addEventListener("input", renderTable);
filterSelect.addEventListener("change", renderTable);
sortBtn.addEventListener("click", sortByScore);

function addStudent(){

let name = nameInput.value.trim();
let score = scoreInput.value;

if(name=="" || score==""){
alert("Không được để trống");
return;
}

score = Number(score);

if(score<0 || score>10){
alert("Điểm phải từ 0-10");
return;
}

students.push({name:name,score:score});

nameInput.value="";
scoreInput.value="";

renderTable();
}

function getRank(score){
if(score>=8.5) return "Giỏi";
if(score>=7) return "Khá";
if(score>=5) return "Trung bình";
return "Yếu";
}

function sortByScore(){
sortAsc=!sortAsc;
renderTable();
}

function renderTable(){

let keyword = searchInput.value.toLowerCase();
let filter = filterSelect.value;

let list = students.filter(s =>
s.name.toLowerCase().includes(keyword)
);

if(filter!="all"){
list = list.filter(s =>
getRank(s.score).toLowerCase()==filter
);
}

list.sort((a,b)=> sortAsc ? a.score-b.score : b.score-a.score);

let html="";

list.forEach((s,i)=>{
html+=`
<tr>
<td>${i+1}</td>
<td>${s.name}</td>
<td>${s.score}</td>
<td>${getRank(s.score)}</td>
<td><button onclick="deleteStudent(${students.indexOf(s)})">Xóa</button></td>
</tr>
`;
});

tableBody.innerHTML = html;

updateSummary();
}

function deleteStudent(index){
students.splice(index,1);
renderTable();
}

function updateSummary(){

let total = students.length;
let sum = 0;

students.forEach(s=>{
sum += s.score;
});

let avg = total ? (sum/total).toFixed(2) : 0;

summary.textContent =
"Tổng sinh viên: "+total+" | Điểm trung bình: "+avg;
}