let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
})


/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
