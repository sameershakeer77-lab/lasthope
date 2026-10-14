// Listen for the push event sent by your Render backend
self.addEventListener('push', function(event) {
    // Extract the data sent from the backend
    const data = event.data ? event.data.json() : {};
    
    // Set the title and the message text (the SMS)
    const title = data.title || "New Message Received!";
    const options = {
        body: data.message || "You have a new message in your Google Sheet.",
        // Optional: You can add URLs to images here if you have them hosted
        // icon: '/icon.png', 
        // badge: '/badge.png'
    };

    // Tell the browser to show the native system notification
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Optional: Handle what happens when the user clicks the notification
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    
    // Open your Google Sheet or Web App when the notification is clicked
    /*
    event.waitUntil(
        clients.openWindow('https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit')
    );
    */
});
