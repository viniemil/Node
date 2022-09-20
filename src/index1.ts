import axios, { AxiosError, AxiosResponse } from "axios";

async function getUserFromGithub(user: string) {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.github.com/users/${user}`
    );
    console.log(response.data);
  } catch (error) {
    console.log("Usuario não existe");
  }
}
getUserFromGithub("djunior97");
getUserFromGithub("djunioriqdivqv97");

async function getRepositories(repo: string) {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.github.com/repos/${repo}`
    );
    console.log(response.data);
  } catch (error) {
    console.log("Repositório não existe");
  }
}
