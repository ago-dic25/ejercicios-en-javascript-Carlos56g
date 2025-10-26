var alumnosJSON = [
    {
        nombre: "Carlos",
        matricula: 2133000
    },
    {
        nombre: "Manuel",
        matricula: 2123213
    },
    {
        nombre: "Cesar",
        matricula: 3123123
    },
    {
        nombre: "Oziel",
        matricula: 1234234
    },
    {
        nombre: "Regina",
        matricula: 3453412
    },
];

var resultJSON;

window.addEventListener("load", () => {
    updateResult(alumnosJSON);
});

//Creates the Divs with the students
function updateResult(list) {
    const resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = ""; // Clear the content when the filter changes
    list.forEach(alumno => {
        var alumnoDiv = document.createElement("div");
        alumnoDiv.className = "AlumnoDiv";
        const alumnoInfo = document.createElement("p");
        alumnoInfo.textContent = `Nombre: ${alumno.nombre}, Matricula: ${alumno.matricula}`;
        alumnoDiv.appendChild(alumnoInfo);
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Eliminar";

        deleteButton.addEventListener("click", () => {
            const globalIndex = alumnosJSON.indexOf(alumno);
            if (globalIndex !== -1) {
                alumnosJSON.splice(globalIndex, 1);
            }

            updateResult(alumnosJSON);
        });

        alumnoDiv.appendChild(deleteButton);
            resultDiv.appendChild(alumnoDiv);
        });
    }

    //Filter
    const filterInput = document.getElementById("filterInput");
    filterInput.addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase();
        resultJSON = alumnosJSON.filter(alumno =>
            alumno.nombre.toLowerCase().includes(searchValue)
        );
        updateResult(resultJSON);
    });

//Agregar
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", (event) => {
    const nameInput = document.getElementById("nameInput");
    const idInput = document.getElementById("idInput");
    const name = nameInput.value;
    const id = idInput.value;
    const newAlumno = {
        nombre: name,
        matricula: id
    };
    alumnosJSON.push(newAlumno);
    updateResult(alumnosJSON);
    nameInput.value = "";
    idInput.value = "";
});


//Ordenar
const orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", () => {
    alumnosJSON.sort((a, b) => {
        return a.nombre.localeCompare(b.nombre);
    });
    updateResult(alumnosJSON);
});


