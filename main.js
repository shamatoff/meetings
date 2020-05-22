'use strict';

const appointments = [
    { id: 1, selected: true, duration: '10:00 - 11:00', title: 'Job Interview', attendees: 'Jon Doe' },
    { id: 2, selected: false, duration: '11:00 - 11:30', title: 'Networking', attendees: 'Bob Marley' },
    { id: 3, selected: false, duration: '11:30 - 12:30', title: 'Lunch', attendees: 'Cookie Monster' },
    { id: 4, selected: false, duration: '12:30 - 13:30', title: 'Daily Meeting', attendees: 'The Boss' },
    { id: 5, selected: false, duration: '13:30 - 14:00', title: 'Product Demo', attendees: 'Jane Doe' },
    // { id: 6, selected: false, duration: '14:00 - 14:30', title: 'Networking II', attendees: 'Dalai Lama' },
    // { id: 7, selected: false, duration: '14:30 - 15:30', title: 'Stretching', attendees: 'Mike Tyson' },
    // { id: 8, selected: false, duration: '15:30 - 16:00', title: 'Dancing', attendees: 'Dua Lipa' },
    // { id: 9, selected: false, duration: '16:00 - 17:30', title: 'COVID-19 Discussion', attendees: 'Bill Gates' },
    // { id: 10, selected: false, duration: '17:30 - 18:00', title: 'Meditation', attendees: 'Melinda Gates' }
];

const actionButtons = [
    { id: 1, icon: 'fa-users', label: 'New meeting' },
    { id: 2, icon: 'fa-phone', label: 'Dial pad' },
    { id: 3, icon: 'fa-desktop', label: 'Present' },
    { id: 4, icon: 'fa-user-plus', label: 'Invite in room' },
    { id: 5, icon: 'fa-share', label: 'Share appointment' },
    // { id: 6, icon: 'fa-podcast', label: 'Start podcast' },
    // { id: 7, icon: 'fa-map', label: 'Share location' },
    // { id: 8, icon: 'fa-virus', label: '#StayAtHome' },
    // { id: 9, icon: 'fa-hand-point-right', label: 'Poke' }
]

function renderAppointments(templateId) {
    const appointmentsContainer = document.getElementById('appointments-inner');
    const fragment = document.getElementById(templateId);

    // Clear out the content from the ul
    appointmentsContainer.innerHTML = '';

    if (!appointments.length) {
        appointmentsContainer.innerHTML =
            '<strong class="user-msg">You don\'t have pending appointments for the day!</strong>';
    }

    // Loop over the books and modify the given template
    appointments.forEach(appointment => {
        // Create an instance of the template content
        const instance = document.importNode(fragment.content, true);
        // Add relevant content to the template
        instance.querySelector('.a-duration').innerHTML = appointment.duration;
        instance.querySelector('.a-title').innerHTML = appointment.title;
        instance.querySelector('.a-attendees').innerHTML = appointment.attendees;
        if (appointment.selected) {
            instance.querySelector('section').classList.add('active');
        } else {
            instance.querySelector('section').classList.remove('active');
        }

        appointmentsContainer.appendChild(instance);
    });
}

function renderActionButtons(templateId) {
    const actionContainer = document.getElementById('action-container');
    const fragment = document.getElementById(templateId);

    // Clear out the content from the ul
    actionButtons.innerHTML = '';

    if (!appointments.length) {
        actionContainer.innerHTML =
            '<strong class="user-msg">Currently you don\'t have permission for any action!</strong>';
    }

    // Loop over the action buttons and modify the given template
    actionButtons.forEach(action => {
        // Create an instance of the template content
        const instance = document.importNode(fragment.content, true);
        // Add relevant content to the template
        instance.querySelector('.action-label').innerHTML = action.label;
        instance.querySelector('.action-icon').classList.add(action.icon);

        actionContainer.appendChild(instance);
    });
}

renderAppointments('appointment-tmpl');
renderActionButtons('action-btn-tmpl')
