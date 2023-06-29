console.log('working');
    
  const d = new Date();
  nowY = d.getFullYear();
  console.log(nowY, 'now year');

  const nowM = d.getMonth() + 1; //current month is in an array that starts from 0
  console.log(nowM, 'now month');

  const nowD = d.getDate();
  console.log(nowD, 'now day');
  
  // const nowY = 2004;
  // const nowM = 3;
  // const nowD = 15;


  const previousNowM = nowM - 1;
  console.log(previousNowM, 'month before this month');

const submitB = document.getElementById('inputButton');
let ageY = 0;
let ageM = 0;
let ageD = 0;


submitB.addEventListener( 'click', () => {
    event.preventDefault();
    const birthD = Number(document.getElementById('fdays').value);
    const birthM = Number(document.getElementById('fmonths').value);
    const birthY = Number(document.getElementById('fyears').value);
    const previousBirthM = birthM - 1;
    
    console.log(birthD, 'birth day');
    console.log(birthM, 'birth month');
    console.log(birthY, 'birth year');
    console.log(previousBirthM, 'month before birth month');

// scenario when current month is after the birth month
  if (nowM > birthM) {
    ageY = nowY - birthY;
    console.log(ageY, 'age in years');
    document.getElementById('years').innerHTML = ageY + " "; 

    if (nowD > birthD) {
      ageM = nowM - birthM;
      ageD = nowD - birthD;
      console.log(ageM, 'age in months');
      console.log(ageD, 'age in Days');
      document.getElementById('months').innerHTML = ageM + " ";
      document.getElementById('days').innerHTML = ageD + " ";
    }

    else if (nowD == birthD) {
      ageM = nowM - birthM;
      ageD = 0;
      console.log(ageM, 'age in months');
      console.log(ageD, 'age in Days');
      document.getElementById('months').innerHTML = ageM + " ";
      document.getElementById('days').innerHTML = ageD + " ";

    }
    else {
      ageM = nowM - birthM - 1;
      console.log(ageM, 'age in months');
      document.getElementById('months').innerHTML = ageM + " ";
      
      if (previousNowM == 4 || previousNowM == 6 || previousNowM == 9 || previousNowM == 11){
        ageD = (30 - birthD) + nowD;
        console.log(ageD, 'age in Days');
        document.getElementById('days').innerHTML = ageD + " ";
      }
      else if (previousNowM == 2) {
        if (nowY%4 === 0 && nowY%100 !==0 || nowY%400 === 0){
          ageD = (29 - birthD) + nowD;
          console.log(ageD, 'age in Days');
          document.getElementById('days').innerHTML = ageD + " ";
        } else {
          ageD = (28 - birthD) + nowD;
          console.log(ageD, 'age in Days');
          document.getElementById('days').innerHTML = ageD + " ";
        }      

      } else {
        ageD = (31 - birthD) + nowD;
        console.log(ageD, 'age in Days');
        document.getElementById('days').innerHTML = ageD + " ";
      }
           
    }
  }
  
 // scenario when current month is before the birth month
 if (birthM > nowM) {
    ageY = nowY - birthY - 1;
    console.log(ageY, 'age in years');
    document.getElementById('years').innerHTML = ageY + " ";

    if (nowD > birthD) {
      ageM = (12 - birthM) + nowM;
      ageD = nowD - birthD;
      console.log(ageM, 'age in months');
      console.log(ageD, 'age in Days');
      document.getElementById('months').innerHTML = ageM + " ";
      document.getElementById('days').innerHTML = ageD + " ";
    }

    else if (nowD == birthD) {
      ageM = (12 - birthM) + nowM;
      ageD = 0;
      console.log(ageM, 'age in months');
      console.log(ageD, 'age in Days');
      document.getElementById('months').innerHTML = ageM + " ";
      document.getElementById('days').innerHTML = ageD + " ";

    }
    else {
      ageM = (12 - birthM) + nowM - 1;
      console.log(ageM, 'age in months');
      document.getElementById('months').innerHTML = ageM + " ";
      
      if (previousNowM == 4 || previousNowM == 6 || previousNowM == 9 || previousNowM == 11){
        ageD = (30 - birthD) + nowD;
        console.log(ageD, 'age in Days');
        document.getElementById('days').innerHTML = ageD + " ";
      }
      else if (previousNowM == 2) {
        if (nowY%4 === 0 && nowY%100 !==0 || nowY%400 === 0){
          ageD = (29 - birthD) + nowD;
          console.log(ageD, 'age in Days');
          document.getElementById('days').innerHTML = ageD + " ";
        } else {
          ageD = (28 - birthD) + nowD;
          console.log(ageD, 'age in Days');
          document.getElementById('days').innerHTML = ageD + " ";
        }      
       
      }
      else {
        ageD = (31 - birthD) + nowD;
        console.log(ageD, 'age in Days');
        document.getElementById('days').innerHTML = ageD + " ";
      }
            
    }
  }

  //scenario when current month is same as birth month
  if (nowM == birthM) {
      if (nowD > birthD) {
      ageY = nowY - birthY;
      ageM = 0;
      ageD = nowD - birthD;
      console.log(ageY, 'age in years');
      console.log(ageM, 'age in months');
      console.log(ageD, 'age in Days');
      document.getElementById('years').innerHTML = ageY + " ";
      document.getElementById('months').innerHTML = ageM + " ";
      document.getElementById('days').innerHTML = ageD + " ";
    }

    else if (nowD == birthD) {
      ageY = nowY - birthY;
      ageM = 0;
      ageD = 0;
      console.log(ageY, 'age in years');
      console.log(ageM, 'age in months');
      console.log(ageD, 'age in Days');
      document.getElementById('years').innerHTML = ageY + " ";
      document.getElementById('months').innerHTML = ageM + " ";
      document.getElementById('days').innerHTML = ageD + " ";

    }
    else {
      ageY = nowY - birthY - 1;
      ageM = 11;
      console.log(ageY, 'age in years');
      console.log(ageM, 'age in months');
      document.getElementById('years').innerHTML = ageY + " ";
      document.getElementById('months').innerHTML = ageM + " ";
      
      if (previousNowM == 4 || previousNowM == 6 || previousNowM == 9 || previousNowM == 11){
        ageD = (30 - birthD) + nowD;
        console.log(ageD, 'age in Days');
        document.getElementById('days').innerHTML = ageD + " ";
      }
      else if (previousNowM == 2) {
        if (nowY%4 === 0 && nowY%100 !==0 || nowY%400 === 0){
          ageD = (29 - birthD) + nowD;
          console.log(ageD, 'age in Days');
          document.getElementById('days').innerHTML = ageD + " ";
        } else {
          ageD = (28 - birthD) + nowD;
          console.log(ageD, 'age in Days');
          document.getElementById('days').innerHTML = ageD + " ";
        }      

      }
      else {
        ageD = (31 - birthD) + nowD;
        console.log(ageD, 'age in Days');
        document.getElementById('days').innerHTML = ageD + " ";
      }
            
    }
  }

})


