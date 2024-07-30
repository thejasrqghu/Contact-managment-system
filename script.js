document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${name} - ${email} - ${phone}</span> <button onclick="removeContact(this)">Remove</button>`;
    
    // Add the new contact to the list
    document.getElementById('contactList').appendChild(li);
    
    // Clear the form
    document.getElementById('contactForm').reset();
});

function removeContact(button) {
    // Remove the parent list item
    button.parentElement.remove();
}
