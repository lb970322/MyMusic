// pages/musiclist/musiclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playLists:[],
    musicList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let musicgId=options.id
    this.getMusic_List(musicgId)
  },
  getMusic_List(musicgId){
    let that=this
    wx.request({
      url: 'http://localhost:3000/playlist/detail?id='+musicgId,
      success(res){
        if(res.data.code===200){
          that.setData({
            playLists:res.data.playlist.tracks,
          })
        }
      }
    })
  },
  getMusicList() {
    let that = this;
    wx.request({
      url: 'http://localhost:3000/top/playlist/highquality?limit=6',
      success(res) {
        if (res.data.code == 200) {
          that.setData({
            musicList: res.data.playlists
          })
        }
      }
    })
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