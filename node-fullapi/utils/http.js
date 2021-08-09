function end(res, err){
  let obj = null
  switch (err) {
    case 1:
      obj = { err, msg: '入参有误' }
      break;
    case 2:
      obj = { err, msg: '参数类型错误'}
      break;
    case -1:
      obj = { err, msg: 'token 无效'}
      break;
    default:

  }
  res.json(obj)
}

module.exports = {
  end
}
