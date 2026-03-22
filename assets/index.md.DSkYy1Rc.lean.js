import { _ as _export_sfc, o as openBlock, c as createElementBlock, ag as createStaticVNode } from "./chunks/framework.DnjriQqU.js";
const __pageData = JSON.parse('{"title":"ModLink Studio 文档总览","description":"","frontmatter":{"layout":"home","hero":{"name":"ModLink Studio","text":"面向设备接入、多模态采集与展示的文档站","tagline":"这个文档站记录的是 ModLink Studio 的接入方式、运行时结构，以及围绕这些能力展开的展示与应用组织方式","actions":[{"theme":"brand","text":"查看 SDK","link":"/sdk"},{"theme":"alt","text":"查看 Core","link":"/core"}]},"features":[{"icon":"🔌","title":"设备接入","details":"这里记录 driver 的基本契约，以及一个设备如何通过 SearchResult、StreamDescriptor 和 FrameEnvelope 接入整套平台。"},{"icon":"🧠","title":"轻量开发","details":"常见轮询设备可以直接使用 LoopDriver；遇到 callback 型或更特殊的设备时，再回到基础 Driver 即可。"},{"icon":"📡","title":"统一流模型","details":"设备一旦接入，系统内部主要围绕 stream_id、payload_type、数据 shape 和 descriptor 来协作，而不是继续依赖具体设备协议。"},{"icon":"🧩","title":"分层组织","details":"SDK 负责接入契约，Core 负责运行时与总线，UI 负责展示，App 负责最终组装与启动。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1774191669000}');
const _sfc_main = { name: "index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("", 19)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
