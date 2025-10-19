const IndividualUrl = 'https://equinoxbackend-96ub.onrender.com/Web_IdR';
const InstitutionUrl =  'https://equinoxbackend-96ub.onrender.com/Web_InR';
const LookupUrl = 'https://equinoxbackend-96ub.onrender.com/lookup'

export const sendRegistrationDataIndividual = async (registrationData) => {
  try {
    const response = await fetch(IndividualUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });

    if (!response.ok) {
      let errorData = {};
      try {
        errorData = await response.json(); // try to parse JSON
      } catch {
        errorData = { detail: { code: 'UNKNOWN', message: 'Something went wrong' } };
      }

      // Ensure we always throw an object with 'detail'
      if (!errorData.detail) {
        errorData.detail = { code: 'UNKNOWN', message: 'Something went wrong' };
      }

      throw errorData; // throw for catch in handleSubmit
    }

    const data = await response.json();
    return data; // Return response data (e.g., { uid: '12345', message: 'Success' })
  } catch (error) {
    console.error('Error sending registration data:', error);
    throw error; // Let the caller handle the error
  }
};

export const lookupRegistration = async (uid) => {
  const NEW_URL = LookupUrl+"/"+uid
  try {
    const response = await fetch(NEW_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (Object.keys(data).length === 0) {
        return undefined;
    }
    return data;
  }
  catch (error){
    console.error('Error making GET request:', error.message);
    throw error;
  }
}

export const sendRegistrationDataInstitution = async (registrationData) => {
  try {
    const response = await fetch(InstitutionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });

    if (!response.ok) {
      let errorData = {};
      try {
        errorData = await response.json(); // try to parse JSON
      } catch {
        errorData = { detail: { code: 'UNKNOWN', message: 'Something went wrong' } };
      }

      // Ensure we always throw an object with 'detail'
      if (!errorData.detail) {
        errorData.detail = { code: 'UNKNOWN', message: 'Something went wrong' };
      }

      throw errorData; // throw for catch in handleSubmit
    }

    const data = await response.json();
    return data; // Return response data (e.g., { uid: '12345', message: 'Success' })
  } catch (error) {
    console.error('Error sending registration data:', error);
    throw error; // Let the caller handle the error
  }
};