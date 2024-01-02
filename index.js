const teamMembers = [{"first_name":"Cobie","last_name":"Cobolster","email":"ccobolster@reddit.com","avatar":"cobie-cobolster.jpeg","department":"Senior COBOL Developer"},
{"first_name":"Grace","last_name":"Codeford","email":"gcodeford@timesonline.co.uk","avatar":"grace-codeford.jpg","department":"Lead Software Developer"},
{"first_name":"Ruby","last_name":"Resolver","email":"rresolver4@amazon.co.jp","avatar":"ruby-resolver.jpg","department":"COBOL Consoltant"},
{"first_name":"Sam","last_name":"Scalability","email":"sscalability@prweb.com","avatar":"sam-scalability.jpeg","department":"Infrastructure Architect"},
{"first_name":"Lola","last_name":"Legacy","email":"llegacy@gmpg.org","avatar":"lola-legacy.jpg","department":"COBOL Evangelist"},
{"first_name":"Hailey","last_name":"Roach","email":"hroach5@cdbaby.com","avatar":"https://robohash.org/inblanditiisquisquam.png?size=50x50&set=set1","department":"Training"},
{"first_name":"Lowe","last_name":"Dibnah","email":"ldibnah6@comsenz.com","avatar":"https://robohash.org/etevenietsit.png?size=50x50&set=set1","department":"Support"},
{"first_name":"Yorker","last_name":"Mapp","email":"ymapp7@dyndns.org","avatar":"https://robohash.org/sapientevoluptatumomnis.png?size=50x50&set=set1","department":"Customer Service"},
{"first_name":"Barrett","last_name":"Antecki","email":"bantecki8@ca.gov","avatar":"https://robohash.org/distinctiolaborerepudiandae.png?size=50x50&set=set1","department":"Human Resources"},
{"first_name":"Shawna","last_name":"Cheston","email":"scheston9@umn.edu","avatar":"https://robohash.org/nisisedplaceat.png?size=50x50&set=set1","department":"Legal"}];

function displayTeam() {
    const container = document.getElementsByClassName("team-member");
    let htmlContent = '';

    teamMembers.forEach(member => {
        htmlContent += `
        <div class="team-member">    
        <li class="meet">
            <li class="name">
               ${member.first_name} {member.last_name}
            </li>
            <li class="email">
                ${member.email}
            </li>
            <img src="${member.avatar}" alt="${member.first_name} ${member.last_name}" class="avatar">
            <li class="department">
                ${member.department}
            </li>
        </li>
        </div>
        `;
    });
    return container.innerHTML.htmlContent;
}

window.onload = displayTeam

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const timestamp = new Date().toLocaleString();

    console.log(`Message received at ${timestamp}: \nName: ${name}\nMessage: ${message}`);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const timestamp = new Date().toLocaleString();

    alert(`Message received at ${timestamp}:\nName: ${name}\nMessage: ${message}`);
});


function generateProfiles(teamMembers) {
    let profiles = '';

    teamMembers.forEach(member => {
        profiles += `
        <div class="profile">
            <img src="${member.avatar}" alt="${member.first_name} ${member.last_name}">
            <h2>${member.first_name} ${member.last_name}</h2>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p>Department: ${member.department}</p>
        </div>
        `;
    });

    return profiles;
}

// Use the function
let profilesHTML = generateProfiles(teamMembers);
document.getElementById('team-container').innerHTML = profilesHTML;