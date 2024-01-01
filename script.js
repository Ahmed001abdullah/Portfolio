// function openProject(projectName) {
//     // Implement logic to open the selected project
//     console.log('Opening ' + projectName);
//     // You can open a modal or link to a separate project page, etc.
// }

// document.addEventListener("scroll", function() {
//     var headerHeight = document.querySelector("header").offsetHeight;
//     var nav = document.querySelector("nav");
//     var navPlaceholder = document.getElementById("navbar-placeholder");

//     if (navPlaceholder !== null) {
//         if (window.scrollY > headerHeight) {
//             nav.classList.add("fixed");
//             navPlaceholder.style.display = "block";
//         } else {
//             nav.classList.remove("fixed");
//             navPlaceholder.style.display = "none";
//         }
//     } else {
//         console.error("Element with id 'navbar-placeholder' not found.");
//     }
// });



// document.addEventListener("DOMContentLoaded", function() {
//     document.addEventListener("scroll", function() {
//         var headerHeight = document.querySelector("header").offsetHeight;
//         var nav = document.querySelector("nav");

//         if (window.scrollY > headerHeight) {
//             nav.classList.add("fixed");
//         } else {
//             nav.classList.remove("fixed");
//         }
//     });

//     function openProject(projectName) {
//         // Implement logic to open the selected project
//         console.log('Opening ' + projectName);
//         // You can open a modal or link to a separate project page, etc.
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    // Your existing code here

    // Event listener for project buttons
    document.querySelectorAll('.project button').forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the GitHub link from the data attribute
            var githubLink = button.getAttribute('data-github');
            
            // Open the GitHub link in a new tab
            window.open(githubLink, '_blank');
        });
    });

    document.addEventListener("scroll", function() {
        var headerHeight = document.querySelector("header").offsetHeight;
        var nav = document.querySelector("nav");
        var navPlaceholder = document.getElementById("navbar-placeholder");

        if (navPlaceholder !== null) {
            if (window.scrollY > headerHeight) {
                nav.classList.add("fixed");
                navPlaceholder.style.display = "block";
            } else {
                nav.classList.remove("fixed");
                navPlaceholder.style.display = "none";
            }
        } else {
            console.error("Element with id 'navbar-placeholder' not found.");
        }
    });

    function openProject(projectName) {
        // Implement logic to open the selected project
        console.log('Opening ' + projectName);
        // You can open a modal or link to a separate project page, etc.
    }
});