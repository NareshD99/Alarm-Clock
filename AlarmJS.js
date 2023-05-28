//method to set current time into the display
function updateCurrentTime(){
    const now = new Date();
      const clock = document.getElementById('CurrentTimeDisplay');
      CurrentTimeDisplay.textContent = now.toLocaleTimeString();
}   
// method for setting alarm and alerting
function setAlarm() {
  //inputs to set alarm
    const hour = document.getElementById('input-hour').value;
    const minute = document.getElementById('input-minute').value;
    const second = document.getElementById('input-second').value;
    const meridiem = document.getElementById('meridiem').value;

    const alarmTime = new Date();
    alarmTime.setHours(parseInt(hour) + (meridiem === 'PM' ? 12 : 0));
    alarmTime.setMinutes(parseInt(minute));
    alarmTime.setSeconds(parseInt(second));
  //creating the alarm on button click set alarm
    const alarmItem = document.createElement('li');
    alarmItem.classList.add('add-List');//adding alarm list
    alarmItem.textContent = alarmTime.toLocaleTimeString();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    //adding the delete button class
    deleteBtn.classList.add('delete-button');
    deleteBtn.addEventListener('click', function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });

    alarmItem.appendChild(deleteBtn);//adding delete btn to li(list)
    const alarmsList = document.getElementById('alarms');
    alarmsList.appendChild(alarmItem);

    //method is used to repeatedly call the checkAlarm for every 1sec
    setInterval(function() {
      checkAlarm(alarmTime);
    }, 1000);
  
  }

  function checkAlarm(alarmTime) {
    const now = new Date();
  //comparing current time and alarm set time
    if (now.getHours() === alarmTime.getHours() && now.getMinutes() === alarmTime.getMinutes() && now.getSeconds() === alarmTime.getSeconds()) 
    {
      alert('Alarm!!!');
    }
  }

setInterval(updateCurrentTime,1000);
document.getElementById('set-time').addEventListener('click', setAlarm);