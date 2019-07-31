import http from "@sinoui/http";

/**
 * 获取所有版本信息
 */
export function getAllVersions() {
  return http.get("/versions/all");
}

/**
 * 新建版本信息
 */
export function postNewVersion(itam: { title: string; num: string }) {
  return http.post("/versions/add/version", itam);
}

export function putVersion(item: { title: string; num: string; id: string }) {
  return http.put("/versions/update/version", item);
}

export function deleteVersion(id: string) {
  return http.delete(`versions/delete/${id}`);
}
