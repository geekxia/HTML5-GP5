<template>
  <div class="app-container">
    <!-- 第一部分：各种filter -->
    <div class="filter-container">
      <!-- 根据商品名称进行搜索 -->
      <el-input
        v-model="filter.name"
        placeholder="商品名称"
        style="width: 200px;"
        class="filter-item"
        clearable
        @clear="handleFilter"
        @keyup.enter.native="handleFilter"
      />
      <!-- 根据品类进行搜索 -->
      <!-- v-model = v-bind:value + v-on:input -->
      <GoodCateSelect
        v-model="filter.cate"
        @change="handleFilter"
      />
      <!-- 根据时间段进行搜索 -->
      <el-date-picker
        v-model="filter.date"
        type="daterange"
        range-separator="至"
        class="filter-item"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="dateChange"
      />

    </div>
    <!-- 表格 -->
    <div class="qf-gl-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="selectHandle"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        />
        <!-- 第一列 -->
        <el-table-column
          prop="name"
          label="商品"
          align="center"
        >
          <template slot-scope="scope">
            <div class="qf-good-info">
              <img :src="$config.imgBase+scope.row.img" alt="">
              <div v-text="scope.row.name" />
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="cate"
          align="center"
          label="品类"
        >
          <template slot-scope="scope">
            <span v-text="cate2Name(scope.row.cate)" />
          </template>
        </el-table-column>
        <el-table-column
          prop="desc"
          align="center"
          label="描述"
          sortable
          :sort-method="customSort"
        />

        <el-table-column
          prop="price"
          align="center"
          label="价格"
        >
          <template slot-scope="scope">
            <span v-text="&quot;￥&quot;+scope.row.price" />
          </template>
        </el-table-column>

        <el-table-column
          prop="create_time"
          align="center"
          label="上架时间"
          width="200"
        >
          <template slot-scope="scope">
            <div v-text="$util.dateParse(scope.row.create_time,&quot;MM月DD日&quot;)" />
            <div v-text="$util.dateParse(scope.row.create_time,&quot;HH:mm&quot;)" />
          </template>
        </el-table-column>
        <el-table-column
          prop="hot"
          align="center"
          label="是否热销"
        >
          <template slot-scope="scope">
            <span v-text="scope.row.hot ? &quot;是&quot;:&quot;否&quot;" />
          </template>
        </el-table-column>
        <el-table-column
          prop="star"
          align="center"
          label="人气值"
          sortable
        />
        <el-table-column
          label="操作"
          width="160"
          align="center"
        >
          <!-- 操作列 -->
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="rowHandle(scope.row, 'edit')"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="rowHandle(scope.row, 'del')"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-button
        size="mini"
        type="danger"
        @click="removeAll"
      >
        删除所选行
      </el-button>
    </div>

    <!-- 分页 -->
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="filter.page"
      :limit.sync="filter.size"
      :page-sizes="[2,4,6,8]"
      @pagination="getList"
    />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  Pagination,
  GoodCateSelect
} from '@/components'
export default {
  name: 'GoodList',
  components: {
    Pagination,
    GoodCateSelect
  },
  data() {
    return {
      filter: {
        page: 1,
        size: 2,
        name: '',
        date: '',
        cate: ''
      },
      total: 0,
      tableData: []
    }
  },
  computed: {
    ...mapGetters(['cates'])
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取商品列表
    getList(e) {
      // 发生查询时，如果新的page等于旧的page，说明发生的是其它条件的查询
      // 结论：当发生非page变化时，page要重置为1

      // 如果e不存在，那肯定不是页码的变化 => 要重置page=1
      // 如果e存在，但flag不存在，说明是size在变化 => 要重置page=1
      // 如果e存在，且flag存在，说明是page在变化 => 无须重置page

      if (!(e && e.flag)) this.filter.page = 1

      this.$api.fetchGoodList(this.filter).then(res => {
        console.log('商品列表', res)
        const { list, total } = res
        this.tableData = list
        this.total = total
      })
    },
    // 用于把品类英文对应成中文
    cate2Name(cate) {
      const ele = this.cates.find(ele => ele.cate === cate)
      return ele ? ele.cate_zh : ''
    },
    handleFilter() {
      // this.getList()
      console.log('触发搜索filter', this.filter)
      this.getList()
    },
    // 知识点：使用moment.js处理各类日期和时间
    dateChange(e) {
      console.log('e', e)
      console.log('start time', this.$util.dateValue(e[0]))
      console.log('end time', this.$util.dateParse(e[1], 'YYYY-MM-DD'))
    },
    selectHandle(e) {
      console.log('select rows', e)
      this.rows = e
    },
    // 删除操作
    rowHandle(row, type) {
      if (type === 'edit') {
        // path和query一起使用，name和params一起使用
        // this.$router.push({
        //   name: 'edit',
        //   params: { id: row._id }
        // })
        this.$router.push('/goods/edit/' + row._id)
      } else {
        this.$api.fetchGoodDel({ ids: row._id }).then(() => {
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success',
            duration: 2000
          })
          this.getList()
        })
      }
    },
    // 批量删除
    removeAll() {
      console.log('删除', this.rows)
      if (this.rows.length > 0) {
        let ids = ''
        this.rows.map(ele => { ids += (';' + ele._id) })
        this.$api.fetchGoodDel({ ids }).then(() => {
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success',
            duration: 2000
          })
          this.getList()
        })
      }
    },
    // 自定义排序方法
    customSort(a, b) {
      return a.desc.length > b.desc.length
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
