//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    newMusicList: [],
    musicList: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 获取歌曲推荐列表
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
  // 获取新歌列表
  getNewMusicList() {
    let that = this;
    wx.request({
      url: 'http://localhost:3000/personalized/newsong',
      success(res) {
        if (res.data.code == 200) {
          that.setData({
            newMusicList: res.data.result
          })
        }
      }
    })
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // 调用歌曲推荐函数
    this.getMusicList();
    this.getNewMusicList();
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})