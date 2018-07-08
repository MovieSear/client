<template>
  <div>
      <div class="header-title">
        <div class="msg-back" @click="backLastPage">
          <div></div>
        </div>
        <div class="msg-title" v-if = "movieMsg">{{movieMsg.title}}</div>
        <div class="msg-back"></div>
      </div>
      <section class="msg-movie">
        <div class="msg-img-wrap">
          <img :src="getImage(movieMsg.images.medium)" :alt="movieMsg.alt">
        </div>
        <div class="">
          <p>用户名称:{{$store.state.username}}</p>
          <p>电影名称:{{movieMsg.title}}</p>
          <span class="">观影时间</span>
          <el-date-picker v-model="calendar.buydate" type="date" placeholder="选择日期" :picker-options="pickerOptions0" value-format="yyyy-MM-dd" format="yyyy 年 MM 月 dd 日"></el-date-picker>
          <p>购买时间:{{nowday()}}</p>
          <p>座次号:{{movieMsg.title}}</p>
        </div>
      </section>
  </div>
</template>

<script>
import spinner from './spinner/spinner'
import vHeader from './header/header'
import axios from 'axios'
export default {
  name: 'hello',
    data () {

      return {
        guodu: true,
        calendar:{
          buyDate:'',
          nowdate:'',
        },
        buyForm: {
          userName: '',
          movieId: '',
          buyDate: '',
          nowDate:'',
          seatNumber:'',
        },
        movieMsg: {
          'rating': {
            'max': '',
            'average': '',
            'details': {
              '1': '',
              '3': '',
              '2': '',
              '5': '',
              '4': ''
            },
            'stars': '',
            'min': 0
          },
          trailer_urls: [],
          collect_count: '',
          'wish_count': '',
          'reviews_count': '',
          'images': {
            'small': '',
            'large': '',
            'medium': ''
          },
          'alt': '',
          'year': '',
          'pubdates': [],
          'id': '',
          'pubdate': '',
          'title': '',
          'languages': [],
          'countries': [],
          'writers': [{
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            },
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'casts': [
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'summary': '',
          'directors': [
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'durations': [],
          'genres': [],
          comments_count: '',
          popular_reviews: ''
        },

        pickerOptions0: {
          disabledDate(time) {
            //return time.getTime() < Date.now() - 8.64e6
            let curDate = (new Date()).getTime();
            let seven = 7 * 24 * 3600 * 1000;
            let sevenday = curDate + seven;
            return time.getTime() < Date.now() || time.getTime() > sevenday;
          }
        },  
      }
    },
  mounted: function () {

      this.$nextTick(function () {
        const _this = this
        const url = this.HOST + '/movie/subject/' + this.$route.query.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd'
       console.info(url);
        axios.get(url).then(res => {
          _this.movieMsg = res.data
        },res => {
          console.info('调用失败');
        });


      })
  },
  methods: {
    backLastPage: function () {
      window.history.go(-1)
    },
    getImage(url){
      console.log(url);
      // 把现在的图片连接传进来，返回一个不受限制的路径
      if(url !== undefined){
        return 'https://images.weserv.nl/?url='+url.substring(7);
      }
    }, 

     nowday() {
      let d = (new Date());
      return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    },
  //提交表单
  submitForm(formName) {
     axios.postIndent(this.postIndent)
      .then(({ data }) => {
   //账号不存在
      if (data.info === false) {
       this.$message({
        type: 'info',
        message: '失败'
       });
       return;
      }
   //账号存在
      if (data.success) {
       this.$message({
        type: 'success',
        message: '提交成功'
       });
       this.$router.push('Home');


      }
     });
  },
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
tr,th{
  text-align:center;
}
</style>