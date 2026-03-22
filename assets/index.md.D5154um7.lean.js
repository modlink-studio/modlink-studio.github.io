import { _ as _export_sfc, o as openBlock, c as createElementBlock, ag as createStaticVNode } from "./chunks/framework.DnjriQqU.js";
const __pageData = JSON.parse('{"title":"ModLink Studio 文档总览","description":"","frontmatter":{"layout":"home","hero":{"name":"ModLink Studio","text":"面向设备接入、多模态采集与展示的文档站","tagline":"先看怎么写 driver，再看数据怎么流动，最后再看 UI 和应用如何把这些能力组合起来","actions":[{"theme":"brand","text":"先看 SDK","link":"/sdk"},{"theme":"alt","text":"看整体架构","link":"/core"}]},"features":[{"icon":"🔌","title":"先解决接入","details":"对设备开发者来说，最重要的是先决定继承 Driver 还是 LoopDriver，然后把 SearchResult、StreamDescriptor 和 FrameEnvelope 定清楚。"},{"icon":"🧠","title":"降低心智负担","details":"常见轮询设备直接用 LoopDriver，callback 型设备直接继承 Driver。先服务最常见的写法，再保留通用底座。"},{"icon":"📡","title":"统一流模型","details":"设备接入后，系统内部都只看 stream_id、payload_type、shape 和 descriptor，不让 UI 直接依赖设备协议。"},{"icon":"🧩","title":"分层明确","details":"SDK 负责接入契约，Core 负责运行时和总线，UI 负责展示，App 负责最终组装和启动。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1774187593000}');
const _sfc_main = { name: "index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("", 17)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
