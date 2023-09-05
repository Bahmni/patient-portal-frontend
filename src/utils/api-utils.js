export const getPatientIdentifier = (patientID) => {
  return `/openmrs/api/v1/patient/login/${patientID}`;
};

export const verifyPatientOtp = () => {
  return `/openmrs/api/v1/patient/verify`;
};

export const getPatientVisits = () => {
  return `/openmrs/api/v1/visit/all`;
};

export const getSingleVisit = (visitUuid) => {
  return `/openmrs/api/v1/visit/each/${visitUuid}`;
};

export const getOPCOnsult = (visitUuid, fromDate, endDate) => {
  return `/openmrs/api/v1/record/opConsult/${visitUuid}?fromDate=${fromDate}&endDate=${endDate}`;
};

export const getDischargeSummary = (visitUuid, fromDate, endDate) => {
  return `/openmrs/api/v1/record/dischargeSummary/${visitUuid}?fromDate=${fromDate}&endDate=${endDate}`;
};

export const getDiagnosticReport = (visitUuid, fromDate, endDate) => {
  return `/openmrs/api/v1/record/diagnosticReport/${visitUuid}?fromDate=${fromDate}&endDate=${endDate}`;
};

export const getImmunization = (visitUuid, fromDate, endDate) => {
  return `/openmrs/api/v1/record/immunization/${visitUuid}?fromDate=${fromDate}&endDate=${endDate}`;
};

export const getPrescription = (visitUuid, fromDate, endDate) => {
  return `/openmrs/api/v1/record/prescription/${visitUuid}?fromDate=${fromDate}&endDate=${endDate}`;
};

export const callGet = async (url, authToken) => {
  try {
    const headers = new Headers();
    headers.append("Authorization", authToken);
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`You have encountered an error : ${response.status}`);
    }
    const data = await response.json();
    const status = response.status;
    return {
      data,
      status,
    };
  } catch (err) {
    return `Error fetching details`;
  }
};

export const callPost = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`You have encountered an error : ${response.status}`);
    }
    const data = await response.json();
    const status = response.status;
    const authToken = response.headers.get("Authorization");
    return {
      data,
      status,
      authToken,
    };
  } catch (err) {
    return `Error fetching details`;
  }
};
