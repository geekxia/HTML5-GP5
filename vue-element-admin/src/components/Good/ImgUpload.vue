<template>
  <div class="qf-img-upload">
    <el-upload
      :action="$config.imgAction"
      :name="name"
      :file-list="list"
      list-type="picture"
      :on-success="imgSuccess"
      :before-upload="imgCheck"
      :on-change="imgChange"
      :on-remove="imgRemove"
      :multiple="multiple"
      :limit="limit"
    >
      <el-button size="mini" type="primary">图片上传</el-button>
      <template #tip>
        <slot name="tip" />
      </template>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'file' },
    multiple: { type: Boolean, default: false },
    limit: { type: Number, default: 9 },
    value: { type: String, default: '' } // v-model
  },
  data() {
    return {
      fileList: []
    }
  },
  computed: {
    list() {
      return this.fileList.length > 0 ? this.fileList : (this.value ? [{ name: '', url: this.$config.imgBase + this.value }] : [])
    }
  },
  // watch还可以监听父组件的传值
  // watch: {
  //   value() {
  //     console.log('value 3', this.value)
  //     this.fileList[0] = {name:'',url:'http://localhost:8888'+this.value}
  //     this.fileList = JSON.parse(JSON.stringify(this.fileList))
  //   }
  // },
  methods: {
    imgCheck(file) {
      // 使用第三方插件检测文件大小、尺寸信息
      console.log('file', file)
      if (file.size > 2 * 1024 * 1024) {
        this.$message.error('只支持2M以内的图片')
        this.$emit('error')
        return false
      }
    },
    imgChange(file) {
      // 只支持一张图片
      // 当用户上传第二张时，在视图上覆盖掉第一张
      console.log('file', file)
      this.fileList = [file]
    },
    imgRemove(file) {
      this.$emit('input', '')
    },
    // 当文件上传成功时的回调
    imgSuccess(res, file, fileList) {
      if (res && res.data && res.data.img) {
        this.$emit('input', res.data.img)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
