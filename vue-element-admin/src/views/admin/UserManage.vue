<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button type="primary" size="mini" @click="showModal">新增用户</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="username"
        label="用户名"
        width="180"
      />
      <el-table-column
        prop="role_name"
        label="用户名称"
        width="180"
      />
      <el-table-column
        prop="status"
        label="用户状态"
      >
        <template slot-scope="scope">
          <span v-text="scope.row.status===&quot;1&quot;?&quot;正常&quot;:&quot;禁用&quot;" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹框 -->
    <el-dialog title="用户新增" :visible.sync="show">
      <el-form
        :model="form"
        :rules="rules"
      >
        <el-form-item
          label="用户名"
          label-width="80"
        >
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item
          label="角色"
          label-width="80"
        >
          <el-select v-model="form.role">
            <el-option
              v-for="item in roleArr"
              :key="item._id"
              :label="item.roleName"
              :value="item.role"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      roleArr: [],
      tableData: [],
      show: false,
      form: {
        username: '',
        role: ''
      },
      rules: {
        username: [
          { required: true, message: '请添加写用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z][a-zA-Z0-9]/, message: '用户名不合法', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '请选择角色', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$api.fetchListUser({}).then(res => {
        console.log('用户列表', res)
        this.tableData = res.list
      })
    },
    showModal() {
      this.show = true
      if (this.roleArr.length === 0) {
        this.$api.fetchAllRoles({}).then(res => {
          this.roleArr = res.list
        })
      }
    },
    submit() {
      console.log('form', this.form)
      this.$api.fetchAddUser(this.form).then(() => {
        this.show = false
        this.init()
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
