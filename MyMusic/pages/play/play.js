// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 音乐详情
    musicInfo:null,
    newMusicList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let musicId=options.id;
    this.getPlayMusic(musicId);
    this.getNewMusicList(musicId)
  },

// 根据歌曲id获取歌曲详情
  getPlayMusic(musicId){
    let that=this;
    wx.request({
      url: 'http://localhost:3000/song/url?id='+musicId,
      success(res){
        if(res.data.code===200){
          that.setData({
            musicInfo:res.data.data[0]
          })
        }
      }
    })
  },

// 根据歌曲id获得歌曲信息
  getNewMusicList(musicId) {
    let that = this;
    wx.request({
      url: 'http://localhost:3000/song/detail?ids='+musicId,
      success(res) {
        if(res.data.code===200){
          that.setData({
            newMusicList:res.data.songs[0]
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