<template>
  <div>
    <span class="content">{{content}}</span>
    <a class="btn">{{btn || '关闭'}}</a>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>

