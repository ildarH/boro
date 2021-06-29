const BASE_URL = 'http://contest.elecard.ru/frontend_data/';

export class Http {
  static HEADERS = { "Content-Type": "text/plain;charset=UTF-8" };
  static async get(params) {
    try {
      return await request(params, 'GET');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

async function request(params, method = 'GET') {
  const url = params ? `${BASE_URL}${params}` : BASE_URL;
  const config = {
    method,
    headers: Http.HEADERS,
    referer: "",
    
  };
  const response = await fetch(url, config);
  return await response.json();
}

