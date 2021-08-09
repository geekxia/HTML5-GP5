<template>
  <div class="app-container">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      style="width:50%;min-width:500px"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input
          v-model="ruleForm.desc"
          type="textarea"
          :rows="3"
        />
      </el-form-item>

      <el-form-item label="是否热销" prop="hot">
        <el-switch v-model="ruleForm.hot" />
      </el-form-item>

      <el-form-item label="商品价格" prop="price">
        <el-input v-model.number="ruleForm.price" />
      </el-form-item>

      <el-form-item label="商品品类" prop="cate">
        <GoodCateSelect v-model="ruleForm.cate" />
      </el-form-item>

      <el-form-item label="商品排名" prop="rank">
        <el-input-number v-model="ruleForm.rank" :min="0" />
      </el-form-item>

      <el-form-item label="商品图片" prop="img">
        <ImgUpload v-model="ruleForm.img" name="xxx">
          <template #tip>
            <div>商品图片限制2M以内</div>
          </template>
        </ImgUpload>
        <!-- <el-upload
          action="http://localhost:8002/api/v1/upload/img"
          name="xxx"
          :file-list="fileList"
          list-type="picture"
          class="upload-demo"
          :on-success='imgSuccess'
          :before-upload='imgCheck'
          :on-change='imgChange'
          :on-remove='imgRemove'
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload> -->
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submit('ruleForm')"
          v-text="id ? &quot;立即修改&quot; : &quot;立即新增&quot;"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  GoodCateSelect,
  ImgUpload
} from '@/components'
export default {
  name: 'GoodForm',
  components: {
    GoodCateSelect,
    ImgUpload
  },
  data() {
    return {
      ruleForm: {
        name: '',
        desc: '',
        hot: false,
        price: 0,
        cate: '',
        rank: 0,
        img: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '商品名字需要3~5个字', trigger: 'blur' }
          // { pattern: /^[a-z]{3,5}/, message:'商品名称只能是小写的英文', trigger:'blur' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
          { min: 10, max: 20, message: '商品描述10~20字', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ],
        cate: [
          { required: true, message: '请输选择品类', trigger: 'change' }
        ],
        img: [
          { required: true, message: '请上传图片', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  created() {
    const id = this.$route.params.id
    if (id) {
      this.$api.fetchGoodDetail({ id }).then(res => {
        console.log('商品详情', res)
        this.ruleForm = res
      })
    }
  },
  methods: {
    submit() {
      // console.log('form', this.ruleForm)

      if (this.id) this.ruleForm.id = this.id
      this.$api.fetchGoodAddOrEdit(this.ruleForm).then(res => {
        // console.log('商品添加成功', res)
        this.$notify({
          title: '成功',
          message: (this.id ? '商品修改成功' : '商品新增成功'),
          type: 'success',
          duration: 2000,
          onClose: () => {
            this.$router.back()
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
