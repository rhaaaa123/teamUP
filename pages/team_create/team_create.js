// pages/team_create/team_create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    team: { id: 321, sup: 5, leader: "张一一", info: "在此可输入队伍名，队伍简介，队员要求等信息", single_list: ["张一一", "张二二", "张三三", "张五五", "张一一", "张二二", "张三三", "张五五", "张一一", "张二二"]}

  },

  formSubmit: function (e) {
    var id = this.data.team.id;
    var sup = this.data.team.sup;
    var leader = e.detail.value.leader;
    var info = e.detail.value.info;

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