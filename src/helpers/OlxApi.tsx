import Cookies from "js-cookie";
import qs from "qs";

type Body = {
  name?: string;
  email: string;
  token?: string;
  password: string;
  state?: string;
};

const BASEAPI = "http://alunos.b7web.com.br:501";

const apiFetchPost = async (endpoint: string, body: Body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
      console.log(body.token);
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

const apiFetchGet = async (endpoint: string, body = [] as unknown as Body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASEAPI}${endpoint}?${qs.stringify(body)}`);
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

const OlxApi = {
  login: async (email: string, password: string) => {
    const json = await apiFetchPost("/user/signin", {
      email: email,
      password: password,
    });

    return json;
  },

  getState: async () => {
    const json = await apiFetchGet("/states");
    return json.states;
  },

  register: async (
    name: string,
    password: string,
    stateLoc: string,
    email: string
  ) => {
    const json = await apiFetchPost("/user/signup", {
      name,
      password,
      state: stateLoc,
      email,
    });
    return json;
  },

  getCatogories: async () => {
    const json = await apiFetchGet("/categories");
    return json.categories;
  },
};

export default OlxApi;
