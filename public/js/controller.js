'use strict';

/* eslint-enable no-undef */
/* eslint-enable no-unused-vars */


let body = {
  '$class': 'org.accordproject.payment.milestone.MilestoneReached',
  'milestoneName':'milestone1',
};

/**
 * Approve milestone 2
 */
function milestone2() {
  body.milestone = 'milestone 1';
  $('#milestone3Button').removeAttr('disabled');
  $('#milestone2Button').attr('disabled', 'disabled');

  /*sendEvent();*/
}

/**
 * Approve milestone 3
 */
function milestone3() {
  body.milestone = 'milestone 2';
  $('#milestone3Button').attr('disabled', 'disabled');

  sendEvent();
}

/**
 * Sends an accelerometer event to the smart contact.
 *
 * @param {function} callback A callback function to invoke after the event has been sent
 */
function sendEvent(){
  let tempBody = body;
  $.ajax({
    type: 'POST',
    url: $('#executionUrl').val(),
    headers: {
      'Authorization': 'Bearer ' + $('#token').val(),
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(tempBody)
  })
}