function getVal() {
  const m1 = parseInt(document.getElementById('m1').value);
  const m2 = parseInt(document.getElementById('m2').value);
  const m3 = parseInt(document.getElementById('m3').value);
  const m4 = parseInt(document.getElementById('m4').value);
  const m5 = parseInt(document.getElementById('m5').value);

  //maximum//

  const t1 = parseInt(document.getElementById('t1').value);
  const t2 = parseInt(document.getElementById('t2').value);
  const t3 = parseInt(document.getElementById('t3').value);
  const t4 = parseInt(document.getElementById('t4').value);
  const t5 = parseInt(document.getElementById('t5').value);

  if (m1 > t1 || m2 > t2 || m3 > t3 || m4 > t4 || m5 > t5) { //checking codition
    document.getElementById('errors').style.display = 'flex';

    document.getElementById('errors').innerText = 'M.ob cannot be greater than M.M';
    document.getElementById('percentage').style.display = 'none';


  } else {
    mark = parseInt(((m1 + m2 + m3 + m4 + m5) / (t1 + t2 + t3 + t4 + t5)) * 100);
    document.getElementById('percentage').style.display = 'flex';

    document.getElementById('percentage').innerText = 'your calculated percentage is : ' + mark.toFixed(2) + '%';
    document.getElementById('errors').style.display = 'none';


  }











}