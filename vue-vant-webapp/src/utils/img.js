import u1Icon from '@/assets/icon/u1.png'
import u2Icon from '@/assets/icon/u2.png'
import u3Icon from '@/assets/icon/u3.png'

// 本地public
const imgBase = 'http://m.3fengs.com'  // 本地开发服务器的图片

// 远程图片服务地址
const baseImg = "http://cdn.3fengs.com"   // 远程服务器上的图片

// 使用模块化来管理应用中的所有图片资源
export default {
  baseImg,
  searchIcon: imgBase+'/images/icon/search.jpg',
  logo: 'http://owoeiwoeioiweoewoi.png',
  u1Icon,
  u2Icon,
  u3Icon,
  noData: imgBase+'/images/no-data.png'
}
