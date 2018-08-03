<script>
import TabContainer from "./tab-container.vue";
export default {
  name: "Tabs",
  // Vue对象初始化的过程中调用这个方法
  // provide() {
  // const data={}
  // Object.defineProperty(data,'value',{
  //  子组件调用value的时候，实际调用的是get方法，每次都会去获取最新的value
  //   get:()=>this.value,
  //   enumberable:true
  // })
  //   return {
  //     data
  //   };
  // },
  components: {
    TabContainer
  },
  props: {
    // 通过value控制显示哪个tab
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      panes: []
    };
  },
  methods: {
    onChange(index) {
      this.$emit("change", index);
    }
  },
  render() {
    return (
      <div class="tabs">
        <ul class="tabs-header">{this.$slots.default}</ul>
        <tab-container panes={this.panes} />
      </div>
    );
  }
};
</script>

<style lang="stylus" scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
