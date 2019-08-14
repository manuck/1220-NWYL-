// import Vue from 'vue'
// import Router from 'vue-router'
//
// const Post = () => import('@/components/post/Post')
// const PostList = () => import('@/components/post/PostList')
//
// Vue.use(Router)
//
// export default new Router({
//   mode: 'hash', // https://router.vuejs.org/api/#mode
//   linkActiveClass: 'open active',
//   scrollBehavior: () => ({ y: 0}),
//   routes: [
//     {
//       path: 'post',
//       meta: { label: 'Post'},
//       component: {
//         render (c) { return c('router-view')}
//       },
//       children [
//         {
//           path: '',
//           component: Post,
//         },
//         {
//           path: ':id',
//           meta: { label: 'Post Details'},
//           name: 'Post',
//           component: PostList,
//         },
//       ]
//     }
//   ]
// })
