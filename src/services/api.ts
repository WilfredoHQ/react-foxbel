import axios from "axios"

const axs = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
})

axs.interceptors.request.use(
  config => {
    config.headers = {
      "X-RapidAPI-Key": "8e8aae60dfmsh1c136aaffa611acp18024ajsnbf216a219dc2",
    }

    return config
  },
  error => Promise.reject(error)
)

export default axs
