export default function ({ store, redirect }) {
    // 如果用户经过身份验证，则重定向到主页
    if (store.state.user) {
      return redirect('/')
    }
  }