/* ==============================================
   Countdown
=============================================== */
// Create a countdown instance. Change the launchDay according to your needs.
// The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
// Thus the launchDay below denotes 7 May, 2014.

/* For Main Circle countdown */
$('.countdown').final_countdown({
    'start': new Date('Jan 01, 2022 00:00:00 UTC+0') / 1000,
    'end': new Date('Oct 19, 2024 19:00:00 UTC+0') / 1000,
    'now': Date.now() / 1000,
});
/* ==============================================
    For Tooltip.
=====================================================================*/

$(function () {
    $('[data-rel="tooltip"]').tooltip();
});
