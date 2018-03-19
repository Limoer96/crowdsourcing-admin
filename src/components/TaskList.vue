<template>
  <div class="task-list-container">
    <Spin v-if="loading"></Spin>
    <Table width="100%" border :columns="columns" :data="mockData"></Table>
    <Alert style="margin-top: 10px" type="error" v-if="error" closable>{{error}}</Alert>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TaskList',
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
          title: '任务名称',
          key: 'task_name',
          width: 100
        },
        {
          title: '任务描述',
          key: 'desc',
          width: 300
        },
        {
          title: '发布时间',
          key: 'publish_time',
          width: 150
        },
        {
          title: '结束时间',
          key: 'end_time',
          width: 150
        },
        {
          title: '期望回答数',
          key: 'expect_answer_count',
          width: 100
        },
        {
          title: '实际回答数',
          key: 'actual_answer_count',
          width: 100
        },
        {
          title: '任务状态',
          key: 'task_status',
          width: 100
        },
        {
          title: '任务进度',
          key: 'task_progress',
          width: 90
        },
        {
          title: '操作',
          key: 'action',
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
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      mockData: [
        {
          t_id: '001',
          task_name: '打折信息',
          desc: '丁豪广场有哪些打折信息',
          publish_time: '2018-3-12 10：12',
          end_time: '2018-3-12 11：12',
          expect_answer_count: '5',
          actual_answer_count: '3',
          task_status: '正在执行',
          task_progress: '60%'
        },
        {
          t_id: '002',
          task_name: '打折信息',
          desc: '万达有哪些打折信息',
          publish_time: '2018-2-19 10：12',
          end_time: '2018-2-20 11：12',
          expect_answer_count: '5',
          actual_answer_count: '4',
          task_status: '正在执行',
          task_progress: '80%'
        }
      ]
    }
  }, 
  methods: {
    show(index) {
      this.$Modal.info({
        title: '任务详情',
        content: `任务编号：${this.mockData[index].t_id}<br>任务名称：${this.mockData[index].task_name}<br>任务描述：${this.mockData[index].desc}<br>发布时间：${this.mockData[index].publish_time}
        <br>结束时间：${this.mockData[index].end_time}<br>期望回答数：${this.mockData[index].expect_answer_count}<br>实际回答数：${this.mockData[index].actual_answer_count}<br>任务状态：${this.mockData[index].task_status}
        <br>执行程度：${this.mockData[index].task_progress}
        `
      })
    },
    remove(index) {
      this.mockData.splice(index, 1);
    }
  },
  computed: {
    ...mapState({
      tasks: (state) => state.task.tasks,
      loading: (state) => state.task.loading,
      error: (state) => state.task.loadError
    })
  },
  mounted() {
    this.$store.dispatch('loadTasks'); // 加载任务数据
  }
}
</script>

<style scoped>
.task-list-container {
  position: relative;
  width: 90%;
  left: 5%;
  top: 20px;
}
</style>
