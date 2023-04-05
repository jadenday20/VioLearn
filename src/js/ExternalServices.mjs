function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      // var jsonResponse = res.body;
      // throw { name: "servicesError", message: jsonResponse };
      
      return res.json()
    }
  }
  
  export default class ExternalServices {
    constructor(url) {
      this.url = url;
    }
    async getData(category) {
        const response = await fetch(this.url);
        const jsonObject = await convertToJson(response);
        const data = jsonObject[category];
        return data;
    }
    async findSongById(id) {
      const response = await fetch(this.url);
        const jsonObject = await convertToJson(response);
        for (let i = 0; i < jsonObject["sheet_music"].length; i++) {
          if (jsonObject["sheet_music"][i]["ID"] == id){
            return jsonObject["sheet_music"][i];
          }
        }

        // const data = jsonObject[category][id];
        // return data;
    }
      
    }