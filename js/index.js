import latexClasses from "./latexTemplateClass.js";
import notesData from "./notesData.js";

const notesContainer = document.getElementById("notes-container");
const classContainer = document.getElementById("class-container");

// Function to create note tables
function createNoteTable() {
    const table = document.createElement("table");
    table.className = "note-table";
    table.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Class</th>
            <th>Link</th>
        </tr>
    `;
    notesData.forEach(note => {
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = note.title;
        const classCell = document.createElement("td");
        classCell.textContent = note.class;
        const linkCell = document.createElement("td");
        linkCell.innerHTML = `
            ${note.pdfLink ? `<a href="${note.pdfLink}" target="_blank">PDF</a> |` : ''}
            ${note.texLink ? `<a href="${note.texLink}" target="_blank">TeX</a>` : ''}
            ${note.others ? `| <a href="${note.others.link}" target="_blank">${note.others.name}</a>` : ''}
        `;
        row.appendChild(titleCell);
        row.appendChild(classCell);
        row.appendChild(linkCell);
        table.appendChild(row);
    });
    notesContainer.appendChild(table);
}

// Function to create class links
function createClassLink(latexClass) {
    const link = document.createElement("a");
    link.href = latexClass.link;
    link.textContent = latexClass.name;
    link.target = "_blank";
    return link;
}  

// Populate class links
latexClasses.forEach(latexClass => {
    const classLink = createClassLink(latexClass);
    classContainer.appendChild(classLink);
    classContainer.appendChild(document.createElement("br")); // Add line break
});

createNoteTable();