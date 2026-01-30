export function sendEmail(data) {
    const apiEndpoint = '/api/email';

    return fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        if (!res.ok) {
            // If the server response is not okay, throw an error
            return res.json().then(errorData => {
                throw new Error(errorData.error || 'Failed to send email');
            });
        }
        return res.json();
    })
    .catch(error => {
        console.error('Error sending email:', error);
        // Rethrow the error to be caught by the calling function
        throw error;
    });
}
