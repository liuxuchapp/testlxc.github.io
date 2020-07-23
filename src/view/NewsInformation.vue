<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center">
                <h3>新闻动态</h3>
                <p style="color:#b2b2b2">Company News</p>
            </div>
            <div class="nav container text-center">
                <a href="javascript:;" @click="currIndex = 0" :class="currIndex == 0 ? 'active':''">公司新闻</a>
                <a href="javascript:;" @click="currIndex = 1" :class="currIndex == 1 ? 'active':''">行业动态</a>
            </div>
            <ul class="news-container container-fuild" v-if="currIndex == 0">
                <li v-for="(item,index) in newsList" :key="index" class="wow fadeIn" @click="toNewDetail(item)">
                    <div class="content">
                        <p>{{item.title}}</p>
                        <p>{{item.introduce}}</p>
                    </div>
                    <div class="time">
                        <p>{{item.date}}</p>
                        <span>{{item.year}}</span>
                    </div>
                    <div class="circle">
                        <img src="../assets/img/circle.png">
                        <i class="line center-block"></i>
                    </div>
                </li>
            </ul>
            <ul class="news-container container-fuild" v-if="currIndex == 1">
                <li v-for="(item,index) in industryTrendsList" :key="index" class="wow fadeIn" @click="toNewDetail(item)">
                    <div class="content">
                        <p>{{item.title}}</p>
                        <p>{{item.introduce}}</p>
                    </div>
                    <div class="time">
                        <p>{{item.date}}</p>
                        <span>{{item.year}}</span>
                    </div>
                    <div class="circle">
                        <img src="../assets/img/circle.png">
                        <i class="line center-block"></i>
                    </div>
                </li>
            </ul>
            <div class="contaianer-fuild text-center more">
                <i class="glyphicon glyphicon-th"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'NewsInformation',
    data(){
        return{
            currIndex: 0,
            newsList:[
                {
                    id: '002',
                    title: '发布了第一个产品',
                    introduce: '经过团队的研发，我司发布了第一款产品，名为Tessai资管系统。',
                    date: '07-23',
                    year: '2020'
                },
                {
                    id: '002',
                    title: '产品更新换代',
                    introduce: '产品已经发布了新的版本，欢迎大家下载体验。',
                    date: '07-22',
                    year: '2020'
                },
                {
                    id: '001',
                    title: '系统首次上线',
                    introduce: '经过多年的研发，系统终于上线了，欢迎大家来体验。',
                    date: '07-21',
                    year: '2020'
                }
            ],
            industryTrendsList: [
                {
                    id: '001',
                    title: '震惊！某某公司竟然研发了xxx科技系统！',
                    introduce: '大家快乐围观啊。',
                    date: '07-22',
                    year: '2020'
                }
            ]
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    },
    methods: {
        /** 前往新闻详情页面 */
        toNewDetail(item) {
            let route = {
                name: 'newsinformationdetail',
                params: {
                    id: item.id
                }
            }
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
#NewsInformation {
    min-height: 500px;
}
.nav{
    margin: 20px 0;
}
.nav>a{
    display: inline-block;
    text-decoration: none;
    width: 120px;
    height: 45px;
    line-height: 45px;
    color: #333;
    border: 1px solid #333;
}
.nav>a.active{
    color: #1e73be;
    border-color: #1e73be;
}
.nav>a:hover{
    color: #1e73be;
    border-color: #1e73be;
}
.news-container{
    overflow: hidden;
    margin-bottom: 0;
}
.news-container>li{
    width: 55.6%;
    height: 120px;
    float: left;
    color: #333;
    text-align: right;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
}
.news-container>li:hover{
    color: #1e73be;
    border: 1px solid #1e73be;
    cursor: pointer;
}
.news-container>li:nth-of-type(2n){
    float: right;
    text-align: left;
}
.news-container>li>.content{
    width: 60%;
    float: left;
    padding: 20px 0;
}
.news-container>li>.time{
    width: 20%;
    float: left;
    padding: 10px 0;
}
.news-container>li>.time>p{
    font-size: 30px;
    margin: 5px 0;
}
.news-container>li>.circle{
    width: 20%;
    height: 100%;
    float: left;
    position: relative;
}
.news-container>li>.circle>img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
}
.news-container>li>.circle>i{
    display: block;
    width: 1px;
    height: 100%;
    background: #707070;
}
.news-container>li:nth-of-type(2n)>.content{
    float: right;
}
.news-container>li:nth-of-type(2n)>.time{
    float: right;
}
.news-container>li:nth-of-type(2n)>.circle{
    float: right;
}
.news-container>li:nth-of-type(1)>.circle>i{
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
}
.more{
    font-size: 25px;
    color: #707070;
}
.more>i{
    cursor: pointer;
}
@media screen and (max-width: 767px){
    .news-container>li{
        width: 100%;
    }
    .news-container>li>.content{
        width: 70%;
        text-align: left;
        float: right;
    }
    .news-container>li>.time{
        width: 30%;
        text-align: left;
        float: right;
    }
    .news-container>li>.circle{
        display: none;
    }
}
</style>

