import http from "../http-common";
class AppointofixDataService {
  getAll() {
    return http.get(`/shops?`);
  }
  getByCategoryAndCity(category, city) {
  return http.get(`/shops?category=${category}&city=${city}`)
}

  get(id) {
    return http.get(`/shops?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`shops?${by}=${query}&page=${page}`);
  } 



  getCategories(id) {
    return http.get(`/category`);
  }

  getSubCategory(query, by='name') {
    return http.get(`/sub_category?${by}=${query}`)
  }
  
  getCity(id) {
    return http.get(`/city`);
  }

  searchName(name) {
    return http.get(`/shops?name=${name}`)
  }

  getName(id) {
    return http.get(`/name`);
  }

    // createReview(data) {
  //   return http.post("/review-new", data);
  // }

  // updateReview(data) {
  //   return http.put("/review-edit", data);
  // }

  // deleteReview(id, userId) {
  //   return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
  // }
  
}
export default new AppointofixDataService();