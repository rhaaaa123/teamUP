// pages/request_list/request_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    invite_data: [{ cap: "队长", team_id: "002", member: ["aaa", "hhh"], time: "2019-05-20 13:14", me: "me" ,read:true}, { cap: "队长2", team_id: "003", member: ["rrr", "hhh"], time: "2019-05-20 13:17", me: "gaga",read:false }, { cap: "队长4", team_id: "004", member: ["rrr", "hhh"], time: "2019-05-20 13:19", me: "gaaga" ,read:true}, { cap: "队长2", team_id: "003", member: ["rrr", "hhh"], time: "2019-05-20 13:17", me: "gaga" ,read:false}],
    apply_data: [{ cap: "队长", team_id: "002", member: ["aaa", "hhh"], time: "2019-05-20 13:14", me: "me" }, { cap: "队长2", team_id: "003", member: ["rrr", "hhh"], time: "2019-05-20 13:17", me: "gaga" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})