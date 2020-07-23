<template>
    <div id="content">
        <Row>
            <i-col span="2">&nbsp;</i-col>
            <i-col span="20">
                <Card>
                    <p slot="title">
                        {{item.title}}
                    </p>
                    <a href="#" slot="extra" @click.prevent="returnBackPage">
                        返回
                    </a>
                    <p style="text-align:center;">{{item.year}}-{{item.date}}</p>
                    <p v-html="item.content">
                    </p>
                </Card>
            </i-col>
            <i-col span="2">&nbsp;</i-col>
        </Row>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'NewsInformationDetail',
    data(){
        return{
            id: null,
            item: {
                id: '002',
                title: '发布了第一个产品',
                introduce: '经过团队的研发，我司发布了第一款产品，名为Tessai资管系统。',
                content: '<p>大公关注到，2020年7月17日， 中天金融 发布《 中天金融 集团股份有限公司关于重大资产重组标的华夏人寿保险股份有限公司被实施接管的公告》。大公将持续关注上述事项进展，并与 中天金融 保持联系，密切关注上述事项对其信用水平可能产生的影响，及时进行信息披露。</p>',
                date: '07-23',
                year: '2020'
            }
        }
    },
    mounted(){
        this.id = this.$route.params.id
    },
    methods: {
        /** 返回上一页 */
        returnBackPage() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
#content {
    min-height: 500px;
    padding-top: 10px;
}
</style>

