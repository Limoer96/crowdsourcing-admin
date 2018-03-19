<template>
  <div class="answer-wrapper">
    <!-- <Spin v-if="loading"></Spin> -->
    <Table width="100%" border :columns="columns" :data="answers"></Table>
    <Alert style="margin-top: 10px" type="error" v-if="error" closable>{{error}}</Alert>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'AnswerList',
  data() {
    return {
      columns: [
        {
          title: '任务编号',
          key: 't_id',
          fixed: 'left',
          width: 100
        },
        {
          title: '任务类型',
          key: 'task_type',
          width: 100
        },
        {
          title: '用户编号',
          key: 'u_id',
          width: 100
        },
        {
          title: '提交答案位置',
          key: 'publish_place',
          width: 200
        },
        {
          title: '答案描述',
          key: 'answer_desc',
          width: 200
        },
        {
          title: '回答时间',
          key: 'answer_time',
          width: 150
        },
        {
          title: '图片路径',
          key: 'pic',
          width: 150
        },
        {
          title: '详情',
          key: 'more',
          width: 150,
          fixed: 'right',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '详情')
            ])
          }
        }
      ],
      answers: [
        {
          t_id: '001',
          question: "万达广场附近的打折信息",
          task_type: '打折',
          u_id: '0001',
          publish_place: '舜华路1500号',
          answer_desc: 'UME优惠50%',
          answer_time: '2018-2-17 13:10',
          pic: '../static/img.jpg'
        },
        {
          t_id: '001',
          question: "万达广场附近的打折信息",
          task_type: '打折',
          u_id: '0002',
          publish_place: '舜华路1500号',
          answer_desc: 'XXX自助烧烤7折优惠',
          answer_time: '2018-3-4 20:00',
          pic: '../static/img.jpg'
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: '答案详情',
        content: `
          任务编号：${this.answers[index].t_id}<br>
          问题：${this.answers[index].question}<br>
          任务类型：${this.answers[index].task_type}<br>
          用户编号：${this.answers[index].u_id}<br>
          提交答案的位置：${this.answers[index].publish_place}<br>
          答案描述：${this.answers[index].answer_desc}<br>
          回答时间：${this.answers[index].answer_time}<br>
          图片预览：<br><img width='200px' height='200px' src=${this.answers[index].pic} alt='答案上传照片凭证'/>
        `
      })
    }
  },
  computed: {
    ...mapState({
      answerList: (state) => state.answer.data,
      error: (state) => state.answer.error
    })
  },
  mounted() {
    this.$store.dispatch('loadAnswers'); // 加载回答数据
  }
}
</script>

<style scoped>
.answer-wrapper{
  position: relative;
  left: 5%;
  width: 90%;
  top: 20px;
}
</style>


