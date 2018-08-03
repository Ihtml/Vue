<script>
export default {
  name: "Tab",
  // 父组件提供provide，子组件注入，但不是响应式的
  // inject: ["data"],
  props: {
    index: {
      type: [Number, String],
      required: true
    },
    label: {
      type: String,
      default: "tab"
    }
  },
  computed: {
    // 当tabs的value等于tab的index，为选中状态
    active() {
      // return data.value === this.index
      return this.$parent.value === this.index;
    }
  },
  methods: {
    handleClick() {
      // 触发父元素监听的事件，并把index传出去
      this.$parent.onChange(this.index);
    }
  },
  render() {
    const tab = this.$slots.label || <span>{this.label}</span>;
    const classNames = {
      tab: true,
      active: this.active
    };
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    );
  }
};
</script>

<style lang="stylus" scoped>
.tab {
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  bottom: -2px;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid blue;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>
