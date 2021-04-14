import axios from "axios";

const HEADER_CONTENT_TYPE = {
  "Content-type": "application/json",
  platform: "browser"
};

export default class PublicAPI {
  static async http({ url, headers, body, method }) {
    const endpoint = `${process.env.API_HOST}${url}`;
    const config = {
      url: endpoint,
      method,
      headers: {
        ...HEADER_CONTENT_TYPE,
        ...headers
      },
      data: {
        ...body
      }
    };
    let res;
    try {
      res = await axios(config);
      res = res.data;
    } catch (err) {
      const errorMessage =
        err.message === "Network Error" ? "Сервер не відповідає" : err.message;

      res = {
        status: "error",
        error: errorMessage
      };
      throw res;
    }
    return res;
  }
  static get(url) {
    return PublicAPI.http({ url, method: "get" });
  }
  static post(url, body) {
    return PublicAPI.http({ url, body, method: "post" });
  }

  static put(url, body) {
    return PublicAPI.http({ url, body, method: "put" });
  }

  static delete(url) {
    return PublicAPI.http({ url, method: "delete" });
  }

  static getHighRatingProducts() {
    return PublicAPI.get("/products/highRating");
  }
  static getRecommendedProducts() {
    return PublicAPI.get("/products?category=&sort=recommended");
  }
  static getHighRatingProducts() {
    return PublicAPI.get("/products/highRating");
  }
  static getNews() {
    return PublicAPI.get("/news");
  }
  static sendForm(data) {
    return PublicAPI.post("/appeal", data);
  }
  static getCatrgories() {
    return PublicAPI.get("/categories");
  }
  static getProducts(page, sort, search = "", categoryId = null) {
    if (categoryId) {
      return PublicAPI.get(
        `/products?page=${page}&category=${categoryId}&sort=${sort}&search=${search}`
      );
    }
    return PublicAPI.get(
      `/products?page=${page}&sort=${sort}&search=${search}`
    );
  }
  static getProductById(id) {
    return PublicAPI.get(`/product/${id}`);
  }
  static getCartItemsByArrayId(arrayId) {
    return PublicAPI.get(`/exact?productsArray=${arrayId}`);
  }
  static getOneNews(id) {
    return PublicAPI.get(`/new/${id}`);
  }
  static getCityes(stringFind) {
    return axios.post("https://api.novaposhta.ua/v2.0/json/", {
      modelName: "AddressGeneral",
      calledMethod: "getCities",
      methodProperties: {
        FindByString: stringFind,
        Limit: 20
      },
      apiKey: "d17f3d73671e792f7bab4aa87ccce31f"
    });
  }
  static getWarehousesByCity(CityName) {
    return axios.post("https://api.novaposhta.ua/v2.0/json/", {
      modelName: "AddressGeneral",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName
      },
      apiKey: "d17f3d73671e792f7bab4aa87ccce31f"
    });
  }
  static orderCreate(data) {
    return PublicAPI.post("/order", data);
  }
  static searchPanel(search, page, sort) {
    if (page && sort) {
      return PublicAPI.get(
        `/products?search=${search}&page=${page}&sort=${sort}`
      );
    }
    return PublicAPI.get(`/products?search=${search}`);
  }
  static registerUser(data) {
    return PublicAPI.post("/register", data);
  }
  static loginUser(data) {
    return PublicAPI.post("/login", data);
  }
  static initData() {
    return PublicAPI.get("/init-data");
  }
  static getAllBlogPostsNewApi() {
    return PublicAPI.get("/posts");
  }
  static getProductsNewApi(page = 1, price = null) {
    let resPrice;
    if (price === "asc" || price === "desc") {
      resPrice = `&price=${price}`;
    }
    if (price === "recommended") {
      resPrice = `&popular=1`;
    }
    return PublicAPI.get(`/products?limit=24&page=${page}${resPrice}`);
  }
  static getCategoryNewApi(child, page = 1, price = null) {
    let resPrice;
    if (price === "asc" || price === "desc") {
      resPrice = `&price=${price}`;
    }
    if (price === "recommended") {
      resPrice = `&popular=1`;
    }
    return PublicAPI.get(`/category/${child}?limit=24&page=${page}${resPrice}`);
  }
  static getProductNewApi(parentCategory, slug) {
    return PublicAPI.get(`/product/${parentCategory}/${slug}`)
  }
  static searchNewApi(q) {
    return PublicAPI.get(`/search?q=${q}`)
  }
}
