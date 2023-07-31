import axios from "axios";
import * as cheerio from "cheerio";

const createMessage = async () => {
    // 입력된 메시지: "안녕하세요~https://www.naver.com 에 방문해 주세요"

    // 1. 입력된 메시지에서 http 로 시작하는 문장이 있는지 먼저 찾기!
    const url = "https://www.naver.com";

    // 2. axios.get 으로 요청해서 html 코드 받아오기 => 스크래핑
    const result = await axios.get(url)
    console.log(result)

    // 3. 스크래핑 결과에서 OG(오픈그래프) 코드를 골라내서 변수에 담기 => cheerio 도움 받기
    const $ = await cheerio.load(result.data)
    $("meta").each((index, el) => {
        if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
            const key = $(el).attr("property")
            const value = $(el).attr("content")
            console.log(key, value)
        }
    })
}

createMessage().then(r => console.log("start!"))