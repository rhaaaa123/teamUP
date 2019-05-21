// pages/class_list/class_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {name:'啊啊啊', id:'2016aaaaaa', fname:'啊'},
    class_data: [{ name: "算法", teacher: "刘青", student_numbers: 56, team_numbers: 5 }, { name: "软件工程", teacher: "刘青", student_numbers: 72,team_numbers: 9 }],
    actionSheetHidden: true
  },
  actionSheetTap: function (options) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindjoin: function (e) {
    console.log('click', e)
    wx.navigateTo({
      url: '../class_join/class_join',
    })
  },
  bindcreate: function (e) {
    console.log('click', e)
    wx.navigateTo({
      url: 'pages/class_create/class_create',
    })
  },
  actionSheetChange: function (options) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
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