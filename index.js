
const pentagonTransitions = () => {
    const pentagons = document.getElementsByClassName('pentagonRectangle');
    let angle = 0;
    console.log("hi");
    console.log(pentagons);
    const length = pentagons.length;
    for (let i = 0; i < length; i++) {
        pentagons[i].style.transform = `rotate(${angle}deg)`;
        angle += 72;
        console.log(`rotate(${angle}deg)`)
        console.log(angle);
    }
}

pentagonTransitions();

const ops = document.getElementById('rightUpperHalf');
const queue = document.getElementById('rightLowerHalf');
const things = [ops, queue];


const clicked = (state) => {
    const right = document.getElementById('right');
    const thing = parseInt(right.dataset.selected);
    console.log(thing);
    if (thing == state) {
        console.log("same");
        return;
    }

    right.dataset.selected = !thing;

    if (state == 1) {
        right.style.transform = `translateY(-80vh)`;
    } else {
        right.style.transform = `translateY(0vh)`;
    }
};


const formsTransition = (state) => {
    // -1 for back
    const options = document.getElementsByClassName('option');
    const ms = document.getElementById('ms')
    const mvm = document.getElementById('mvm');
    const back = document.getElementById('back');
    const forms = [ms, mvm];

    if (state == -1) {
        for (let i = 0; i < 4; i++) {
            options[i].classList.remove('hidden');
        }
        back.classList.add('hidden');
        forms.forEach((form) => {
            form.classList.add("hidden");
        });
        return;
    }

    console.log(options);

    // options.forEach((option) => {
    //     option.classList.add('hidden');
    // });

    for (let i = 0; i < 4; i ++) {
        options[i].classList.add('hidden');
    }

    forms[state].classList.remove('hidden');
    back.classList.remove('hidden');


}

const ms = document.getElementById('ms')
const mvm = document.getElementById('mvm');
const back = document.getElementById('back');
const forms = [ms, mvm];

forms.forEach((hi) => {
    hi.addEventListener("submit", (event) => {
        event.preventDefault();
    });
})

let data = [];

const afterSubmission = (state) => {
    const ms = document.getElementById('ms')
    const mvm = document.getElementById('mvm');
    const back = document.getElementById('back');
    const pentagonHolder = document.getElementById('pentagonHolder');
    const circleContainers = document.getElementsByClassName('circleContainer');
    const forms = [ms, mvm];

    if (state == 0) {
        data.push(document.getElementById('cores1').value);
        data.push(document.getElementById('ms_n').value);
    } else if (state == 1) {
        data.push(document.getElementById('cores2').value);
        data.push(document.getElementById('mvm_n').value);
        data.push(document.getElementById('mvm_m').value);
    } else if (state == 2) {

    } else if (state == 3) {

    } else {
        console.log("error");
    }

    console.log(data);


    forms.forEach((form) => {
        form.classList.add("hidden");
    });

    back.classList.add('hidden');
    pentagonHolder.classList.remove('hidden');

    

    for (let i = 0; i < 5; i++) {
        circleContainers[i].classList.remove('hidden');
    }


}

