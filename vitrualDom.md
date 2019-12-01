# 更新视图方案

1. 全部替换
  - state & jsx 生成真实DOM,并显示
  - state 发生变化
  - 触发render
  - state & jsx 生成真实DOM,并替换

缺点：
  - 第一次生成了完整的DOM片段
  - 第二次生了一个完整的DOM片段
  - 第二次替换了第一次的DOM,非常耗性能

2. DOM比较，再替换
  - state & jsx 生成真实DOM,并显示
  - state 发生变化
  - 触发render
  - state & jsx 生成真实DOM, 与旧的DOM比较，替换改变元素

缺点:
  - 第二次同样生成了完整的DOM
  - 新增了DOM比对，所以性能提升也不明显

3. 虚拟DOM
  - state & jsx
  - 生成虚拟DOM，如['div', {id: 'abc'}, ['span', {}, 'sss']]
  - 用虚拟DOM，生成真实DOM并显示
  - state发生改变
  - 生成新的虚拟DOM
  - 比较原始虚拟DOM，和新的虚拟DOM, 找出区别
  - 渲染真实改变了的DOM

优点:
  1. 数据改变，没有重新生成完整的DOM，只是通过JS重新生成虚拟DOM
  2. 比较两个虚拟DOM，而不是比较两个真实DOM
  3. 真实操作DOM时只替换改变了的元素
  4. 跨端应用得以实现

# JSX
JSX -> createElement -> 虚拟DOM -> 真实DOM

# Diff
1. 同层比对
2. 多次setState合并
3. 循环结构添加key


# 提升渲染优化
1. 组件key
2. setState合并
3. showComponentUpdate