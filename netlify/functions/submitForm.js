exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Check for required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Perform any logic you need with the form data
    // For simplicity, let's just log the data
    console.log('Form submitted:', { name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
