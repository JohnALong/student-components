console.log("woohoo, my page works");
// copied from chapter - students array
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
let studentPassFailName;
let studentPassFailSubject;
let studentPassFailInfo;

// copied from chapter
// const createStudentComponent = (name, subject, info, score) => {
//     if (score >= 60) {
//         studentPassFailName = "xx-large passing";
//         studentPassFailSubject = "borderd dashed section--padded";
//         studentPassFailInfo = "pushRight";
//     } else {
//         studentPassFailName = "failing";
//     }
//     return `
//         <div class="student">
//             <h1 class="${studentPassFailName}">${name}</h1>
//             <section class="${studentPassFailSubject}">${subject}</section>
//             <aside class="${studentPassFailInfo}>${info}</aside>
//         </div>
//     `
// }

// creating function with only 1 argument and 4 components:

const createStudentComponent = (param) => {
    if (param.score >= 60) {
        studentPassFailName = "xx-large passing";
        studentPassFailSubject = "borderd dashed section--padded";
        studentPassFailInfo = "pushRight";
    } else {
        studentPassFailName = "failing";
    }
    return `
        <div class="student">
            <h1 class="${studentPassFailName}">${param.name}</h1>
            <section class="${studentPassFailSubject}">${param.subject}</section>
            <aside class="${studentPassFailInfo}">${param.info}</aside>
        </div>
    `
}
// console.log("create student component", createStudentComponent());

const studentContainer = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(student);
}
// copied from chapter
// for (const student of students) {
