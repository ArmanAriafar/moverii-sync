import Api from "../../../mobx/api/profileSection/api";
import { makeAutoObservable } from "mobx";
// import UsersModel from "../../../mobx/model/profileSection/paymentModel";
import { message } from "antd";

export default class PartnersController {
    List = [];
    item = "";
    // stateView = StateView.State.loading
    error = {};
    total = "";
    currentPage = 1;
    pageSize = 20;
    loading = false;
    constructor() {
        makeAutoObservable(this);
    }

    getData = (currentPage = 1, callback) => {
        this.stateView = StateView.State.loading;
        Api.getTableData(currentPage)
            .then((response) => {
                this.total = response.data.meta.total;
                this.currentPage = response.data.meta.currentPage;
                const arr = [];
                response.data.items.map((item, i) => {
                    console.log(item);
                    const d = new UsersModel();
                    d.setVals(item);
                    d.index = i;
                    arr.push(d);
                });
                this.List = arr;
                callback(arr);

                this.stateView = StateView.State.content;
            })
            .catch((error) => {
                this.stateView = StateView.State.error;
                console.log(error.message);
            });
    };

    // delete = (data, index) => {
    //   console.log(data)
    //   data.loading = true
    //   Api.removeTableItemData(data)
    //     .then((response) => {
    //       this.List.splice(index, 1)
    //       this.total = this.total - 1
    //       data.loading = false
    //       message.success(THelper.t(s + 'Successdeleted'))
    //     })
    //     .catch((error) => {
    //       data.loading = false
    //       message.error(THelper.t(s + 'errorinduringdelete'))
    //       console.log(error)
    //     })
    // }
    // Blogs = (data) => {
    //   console.log('ali')
    //   this.stateView = StateView.State.loading
    //   Api.showItemData(data)
    //     .then((response) => {
    //       // const arr = []
    //       const d = new UsersModel()
    //       d.setVals(response.data)
    //       // arr.push(d)
    //       this.item = d
    //       this.stateView = StateView.State.content
    //       console.log('item', this.item)
    //     })
    //     .catch((error) => {
    //       this.stateView = StateView.State.error
    //       console.log(error.message)
    // })
    // .then((response) => {
    //   console.log(response)
    //   this.loading = false
    //   message.success('data edited Success ')
    // })
    // .catch((error) => {
    //   this.loading = false
    //   message.error('error in during edit data')
    //   console.log(error)
    // })
    // }
    //   edit = (data, id, callback) => {
    //     this.loading = true
    //     console.log(data)
    //     Api.editItemData(data, id)
    //       .then((response) => {
    //         this.loading = false
    //         message.success(THelper.t(s + 'dataeditedSuccess'))
    //         callback()
    //       })
    //       .catch((err) => {
    //         this.loading = false
    //         if (err.response.status !== 422) {
    //           message.error(THelper.t(s + 'errorinduringeditdata'))
    //         } else {
    //           this.error = err.response.data.errors
    //           console.log(this.error)
    //         }
    //       })
    //   }
    add = (data) => {
        Api.sendData(data)
            .then((response) => {
                message.success("Success add");
            })
            .catch((err) => {
                if (err.response.status !== 422) {
                    message.error("error in during add");
                } else {
                    this.error = err.response.data.errors;
                }
            });
    };
    // sort = (data) => {
    //   this.loading = true
    //   Api.sortOrder(data)
    //     .then((response) => {
    //       this.loading = false
    //       message.success(THelper.t(s + 'sortSuccess'))
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       this.loading = false
    //       if (err.response.status !== 422) {
    //         message.error(THelper.t(s + 'errorinduringsort'))
    //       } else {
    //         this.error = err.response.data.errors
    //       }
    //     })
    // }
}
