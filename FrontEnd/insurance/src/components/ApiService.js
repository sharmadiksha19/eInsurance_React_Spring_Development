import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/eInsurance";

class ApiService {
  savePrescription(values) {
    return axios.post(
      USER_API_BASE_URL + "/hQuote",
      values
      //   headers: {
      //     Authorization: "Bearer " + token
      //     }
    );
  }

  signIn(details) {
    return axios.post(USER_API_BASE_URL + "/signin", details);
  }

  fetchPatientById(id, token) {
    return axios.get(USER_API_BASE_URL + "/patient/details/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  fetchHistory(userId, token) {
    return axios.get(USER_API_BASE_URL + "/hospital/get_history/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  updatePatient(patient, token) {
    return axios.put(USER_API_BASE_URL + "/patient/update_details/", patient, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  // fetchHistoryFromPatient(userId, token) {
  //    return axios.get(USER_API_BASE_URL + '/hospital/history/' + userId, {
  //       headers: {
  //          Authorization: "Bearer " + token
  //       }
  //    });
  // }

  fetchHistoryFromPatient(userId, token) {
    return axios.get(USER_API_BASE_URL + "/patient/history/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  createPrescription(prescription, token) {
    return axios.post(USER_API_BASE_URL + "/hospital/create", prescription, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  addPatient(patient, token) {
    return axios.post(USER_API_BASE_URL + "/hospital/create/patient", patient, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  viewPrescription(userId, token) {
    return axios.get(
      USER_API_BASE_URL + "/pharmacy/view_prescription/" + userId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }
  registerHospital(hospital, token) {
    console.log("inside api service call " + token + hospital);
    return axios.post(
      USER_API_BASE_URL + "/admin/register_hospital",
      hospital,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }

  registerPharmacy(pharmacy, token) {
    //console.log("inside api service call" + token + " ..." + JSON.stringify(pharmacy));
    return axios.post(
      USER_API_BASE_URL + "/admin/register_pharmacy",
      pharmacy,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }

  removeHospital(userId, token) {
    return axios.delete(
      USER_API_BASE_URL + "/admin/remove_hospital/" + userId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }

  upload(file, token) {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post(`${USER_API_BASE_URL}/upload/`, formData, {
      headers: {
        "Content-type": "multipart/form-data; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
    });
  }

  getFiles(id, token) {
    return axios.get(`${USER_API_BASE_URL}/files/${id}`, {
      responseType: "blob",
      headers: {
        Accept: "application/pdf",
        Authorization: "Bearer " + token,
      },
    });
  }

  removePharmacy(userId, token) {
    return axios.delete(
      USER_API_BASE_URL + "/admin/remove_pharmacy/" + userId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }

  invalidatePrescription(id, imageId, token) {
    return axios.get(
      USER_API_BASE_URL +
        "/pharmacy/invalidate_active_prescription/" +
        id +
        "/" +
        imageId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }
}

export default new ApiService();
