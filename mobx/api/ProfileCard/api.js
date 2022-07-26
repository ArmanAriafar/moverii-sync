import config from "../global";
export default {
    getData: () => {
        return config.axiosHandle().get("provider/profile/language");
    },
    // getTableData: () => {
    //     return config.axiosHandle().get("admin/dashboard/vouchers");
    // },
    // sendData: (data, conf) => {
    //     console.log(data);
    //     return config.axiosHandle().post("provider/profile/password", data, conf);
    // },
    // removeTableItemData: (id, conf) => {
    //     return config.axiosHandle().get(`admin/dashboard/voucher/disable/${id}`, conf);
    // },
    // showItemData: (data, conf) => {
    //     console.log(data);
    //     return config.axiosHandle().get(`admin/dashboard/voucher/${data}`, conf);
    // },
    // editItemData: (data, id) => {
    //     console.log(id);
    //     return config.axiosHandle().post(`admin/dashboard/voucher/update/${id}`, data);
    // },
    // sortOrder: (data) => {
    //     return config.axiosHandle().post(`cp/sortorder`, { sort: data });
    // },
    // searchUser: (data) => {
    //     return config.axiosHandle().get(`admin/dashboard/voucher/search/user?search=${data}`);
    // },
    // searchOffer: (data) => {
    //     return config.axiosHandle().get(`admin/dashboard/voucher/search/offers?search=${data}`);
    // },
    // searchProvider: (data) => {
    //     return config.axiosHandle().get(`admin/dashboard/voucher/search/provider?search=${data}`);
    // },
};
