exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }
  
    const { name, email, message } = JSON.parse(event.body);
  
    // Perform any logic you need with the form data
    // For simplicity, let's just log the data
    console.log('Form submitted:', { name, email, message });
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  };