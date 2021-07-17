//This is an array of object
const data = [
    {
        fname: 'john',
        lname: 'doe',
        age: 19,
        city: 'Surat',
        language: 'C,C++,Java',
        photo: 'https://randomuser.me/api/portraits/men/57.jpg'
    },
    {
        fname: 'michale',
        lname: 'vaughan',
        age: 20,
        city: 'Rajkot',
        language: 'C,Go',
        photo: 'https://randomuser.me/api/portraits/men/58.jpg'
    },
    {
        fname: 'user',
        lname: 'sinan',
        age: 25,
        city: 'Surat',
        language: 'C,Java',
        photo: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
        fname: 'morris',
        lname: 'prist',
        age: 29,
        city: 'Ahemdabad',
        language: 'Java,Python',
        photo: 'https://randomuser.me/api/portraits/men/60.jpg'
    },
    {
        fname: 'jaimal',
        lname: 'jain',
        age: 29,
        city: 'ahmedabad',
        language: 'Python, Js',
        photo: 'https://randomuser.me/api/portraits/men/61.jpg'
    },
    {
        fname: 'developer',
        lname: 'web',
        age: 20,
        city: 'Surat',
        language: 'C,Java',
        photo: 'https://randomuser.me/api/portraits/men/62.jpg'
    }
]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profiles.length) {
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

let candidate = cvIterator(data);
showNext();

let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', showNext);

function showNext() {
    let currentCand = candidate.next().value;
    // console.log(currentCand);
    let img = document.getElementById('img');
    let detail = document.getElementById('detail');

    if (currentCand != undefined) {
        img.innerHTML = `<img src="${currentCand.photo}">`;

        detail.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name: ${currentCand.fname}</li>
                                <li class="list-group-item">Sirname: ${currentCand.lname}</li>
                                <li class="list-group-item">Age: ${currentCand.age}</li>
                                <li class="list-group-item">City: ${currentCand.city}</li>
                                <li class="list-group-item">Language: ${currentCand.language}</li>
                            </ul>`;
    }
    else {
        alert('End of candidate list, press Ok to repeat list');
        window.location.reload();
    }
}