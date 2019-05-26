// pages/team_more/team_more.js
var status = true;//false 表示发送申请
Page({

  /**
   * 页面的初始数据
   */
  
  toastShow: function (event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    this.setData({ status: status })　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果

  },
  toastHide: function (event) {
    console.log("触发bindchange，隐藏toast")
    status = true
    this.setData({ status: status })
  },
  data: {

    team: { id: 321, count: 3, sup: 5, leader: "张一一", info: "这是一个神秘的队伍这是一个神秘的队伍这是一个神秘的队伍这是一个神秘的队伍这是一个神秘的队伍", member: ["张一一", "张二二", "张三三"] }, status: status

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