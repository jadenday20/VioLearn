function assignmentDetailsTemplate(assignments, student) {
    let html = `<h1>${student}'s Assignments</h1>`;
    for (let i in assignments) {
        html += `<section class="assignments-detail"><h2>${assignments[i].name}</h2>`
        html += `<p>${assignments[i].notes}</p>`
        if (assignments[i].songID){
            html += `<a class="detailLink" href="/songs/index.html?song=${assignments[i].songID}">Song Details</a>`
        }
        if (assignments[i].audioFiles){
            html += `<ul class="audioList">`;
        for (let x = 0; x < assignments[i].audioFiles.length; x++){
            html += `<li class="audio_li"><label>${assignments[i].audioFiles[x]}</label><audio controls><source src="/audio_files/${assignments[i].audioFiles[x]}.m4a" type="audio/mpeg"></source></audio></li>`;
        }
            html += `</ul>`;
    }
        html += `</section>`;
    }
    return html;
}

export default class AssignmentDetails {
    constructor(student, dataSource){
        this.studentName = student;
        this.Assignments = {};
        this.dataSource = dataSource;
      }
      async init() {
        // use our datasource to get the details for the current song. findsongById will return a promise! use await or .then() to process it
        this.Assignments = await this.dataSource.findAssignmentsByStudent(this.studentName);
        // once we have the song details we can render out the HTML
        this.renderAssignmentDetails("#assignments");
      }
      renderAssignmentDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
          "afterBegin",
          assignmentDetailsTemplate(this.Assignments, this.studentName)
        );}
}