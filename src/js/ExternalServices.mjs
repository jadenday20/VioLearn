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
        // await fetch(this.url)
        // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (jsonObject) {
        //     const data = jsonObject[category]
        //     console.log(data)
        //     return data;
        // });
        const response = await fetch(this.url);
        const jsonObject = await convertToJson(response);
        const data = jsonObject[category];
        return data;
    }
      
    }