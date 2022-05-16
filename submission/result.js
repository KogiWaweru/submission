
window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const fname = params.get('first-name');
    const lname = params.get('last-name');
    const job = params.get('job');
    const email = params.get('email');
    const choice1 = params.get('choice1');
    const choice2 = params.get('choice2');
    const choice3 = params.get('choice3');
    const choice4 = params.get('choice4');
    const choice5 = params.get('choice5');

    document.getElementById('result-name').innerHTML = fname + " " + lname;
    document.getElementById('result-job').innerHTML = job;
    document.getElementById('result-email').innerHTML = email;

    document.getElementById('choice-1').innerHTML = choice1;
    document.getElementById('choice-2').innerHTML = choice2;
    document.getElementById('choice-3').innerHTML = choice3;
    document.getElementById('choice-4').innerHTML = choice4;
    document.getElementById('choice-5').innerHTML = choice5;



})