import { K as current_component, M as sanitize_props, N as rest_props, O as fallback, P as ensure_array_like, Q as spread_attributes, R as clsx, S as element, T as slot, U as bind_props, D as pop, A as push, V as spread_props, E as head, J as escape_html, W as attr_class, X as store_get, F as attr, Y as maybe_selected, Z as unsubscribe_stores, _ as stringify } from "../../chunks/index2.js";
import "@xsai-transformers/shared/worker";
import { d as derived, w as writable } from "../../chunks/index.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const ask$1 = "Ask";
const scale$1 = "Scale";
const max_size$1 = "Max Size";
const interval$1 = "Interval";
const start$1 = "Start";
const stop$1 = "Stop";
const not_supported$1 = "Not Supported";
const not_supported_camera$1 = "Browser does not support video camera. Please use a supported browser.";
const not_supported_webgpu$1 = "Browser does not support WebGPU. Please use a supported browser.";
const warning$1 = "Warning";
const permission_not_granted$1 = "Permission not granted. Please grant permission first.";
const capture_failed$1 = "Capture failed";
const model_loading_failed$1 = "UForm-Gen2-Qwen model loading failed, please refresh the page and try again";
const instruction_placeholder$1 = "Describe what you see in the image";
const load_from$1 = "Load From";
const network$1 = "Network";
const local$1 = "Local";
const local_path$1 = "Local Path";
const local_path_placeholder$1 = "C:\\models or /models/unum-cloud/uform-gen2-qwen-500m";
const en = {
  ask: ask$1,
  scale: scale$1,
  max_size: max_size$1,
  interval: interval$1,
  start: start$1,
  stop: stop$1,
  not_supported: not_supported$1,
  not_supported_camera: not_supported_camera$1,
  not_supported_webgpu: not_supported_webgpu$1,
  warning: warning$1,
  permission_not_granted: permission_not_granted$1,
  capture_failed: capture_failed$1,
  model_loading_failed: model_loading_failed$1,
  instruction_placeholder: instruction_placeholder$1,
  load_from: load_from$1,
  network: network$1,
  local: local$1,
  local_path: local_path$1,
  local_path_placeholder: local_path_placeholder$1
};
const ask = "询问";
const scale = "缩放";
const max_size = "最大尺寸";
const interval = "间隔";
const start = "开始";
const stop = "停止";
const not_supported = "不支持";
const not_supported_camera = "浏览器不支持视频摄像头。请使用支持的浏览器。";
const not_supported_webgpu = "浏览器不支持 WebGPU。请使用支持的浏览器。";
const warning = "警告";
const permission_not_granted = "未授予权限。请先授予权限。";
const capture_failed = "捕获失败";
const model_loading_failed = "UForm-Gen2-Qwen 模型加载失败，请刷新页面重试";
const instruction_placeholder = "描述你在图像中看到的内容";
const load_from = "加载来源";
const network = "网络";
const local = "本地";
const local_path = "本地路径";
const local_path_placeholder = "C:\\models 或 /models/unum-cloud/uform-gen2-qwen-500m";
const zh = {
  ask,
  scale,
  max_size,
  interval,
  start,
  stop,
  not_supported,
  not_supported_camera,
  not_supported_webgpu,
  warning,
  permission_not_granted,
  capture_failed,
  model_loading_failed,
  instruction_placeholder,
  load_from,
  network,
  local,
  local_path,
  local_path_placeholder
};
const locales = {
  en,
  zh
};
const locale = writable("en");
function translate(locale2, key, vars) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale2) throw new Error(`no translation for key "${key}"`);
  let text = locales[locale2][key];
  if (!text) throw new Error(`no translation found for ${locale2}.${key}`);
  if (vars && Object.keys(vars).length > 0) {
    Object.keys(vars).forEach((k) => {
      const regex = new RegExp(`{{${k}}}`, "g");
      text = text.replace(regex, vars[k]);
    });
  }
  return text;
}
const t = derived(
  locale,
  ($locale) => (key, vars = {}) => translate($locale, key, vars)
);
/**
 * @license lucide-svelte v0.540.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out.push(`<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out.push(`${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`);
    });
  }
  $$payload.out.push(`<!--]--><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></svg>`);
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Languages($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.540.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "m5 8 6 6" }],
    ["path", { "d": "m4 14 6-6 2-3" }],
    ["path", { "d": "M2 5h12" }],
    ["path", { "d": "M7 2h1" }],
    ["path", { "d": "m22 22-5-10-5 10" }],
    ["path", { "d": "M14 18h6" }]
  ];
  Icon($$payload, spread_props([
    { name: "languages" },
    $$sanitized_props,
    {
      /**
       * @component @name Languages
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNSA4IDYgNiIgLz4KICA8cGF0aCBkPSJtNCAxNCA2LTYgMi0zIiAvPgogIDxwYXRoIGQ9Ik0yIDVoMTIiIC8+CiAgPHBhdGggZD0iTTcgMmgxIiAvPgogIDxwYXRoIGQ9Im0yMiAyMi01LTEwLTUgMTAiIC8+CiAgPHBhdGggZD0iTTE0IDE4aDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/languages
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Moon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.540.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "moon" },
    $$sanitized_props,
    {
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.540.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$payload, spread_props([
    { name: "settings" },
    $$sanitized_props,
    {
      /**
       * @component @name Settings
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOS42NzEgNC4xMzZhMi4zNCAyLjM0IDAgMCAxIDQuNjU5IDAgMi4zNCAyLjM0IDAgMCAwIDMuMzE5IDEuOTE1IDIuMzQgMi4zNCAwIDAgMSAyLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMCAwIDMuODMxIDIuMzQgMi4zNCAwIDAgMS0yLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMC0zLjMxOSAxLjkxNSAyLjM0IDIuMzQgMCAwIDEtNC42NTkgMCAyLjM0IDIuMzQgMCAwIDAtMy4zMi0xLjkxNSAyLjM0IDIuMzQgMCAwIDEtMi4zMy00LjAzMyAyLjM0IDIuMzQgMCAwIDAgMC0zLjgzMUEyLjM0IDIuMzQgMCAwIDEgNi4zNSA2LjA1MWEyLjM0IDIuMzQgMCAwIDAgMy4zMTktMS45MTUiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/settings
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let fpsCounter = 0;
  let processingTime = 0;
  const loadingItemsSet = /* @__PURE__ */ new Set();
  let videoInputs = [];
  let selectedVideoSourceDeviceId = void 0;
  onDestroy(() => {
    resetProgressState();
  });
  function resetProgressState() {
    console.log("[Reset] Clearing all progress states");
    loadingItemsSet.clear();
  }
  const each_array = ensure_array_like(videoInputs);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>UForm-Gen2-Qwen-500M with Florence-2 Fallback (Svelte)</title>`;
  });
  $$payload.out.push(`<div class="p-0 sm:p-4 max-h-dvh max-w-dvw relative h-full w-full svelte-8bzr5i"><div class="relative z-0 h-full w-full overflow-hidden rounded-none sm:rounded-3xl shadow-md flex items-center justify-center svelte-8bzr5i"><div class="absolute left-0 top-0 z-10 p-2 sm:p-4 flex items-center gap-2 svelte-8bzr5i"><div class="bg-white dark:bg-neutral-900 text-black dark:text-white text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:py-2 transition-all duration-300 ease-in-out svelte-8bzr5i">UForm-Gen2-Qwen-500M ↹ Florence-2</div></div> <div class="absolute right-4 top-4 z-10 bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:py-2 transition-all duration-300 ease-in-out flex gap-2 svelte-8bzr5i"><span class="svelte-8bzr5i">FPS: <span class="font-mono svelte-8bzr5i">${escape_html(fpsCounter)}</span></span> <span class="svelte-8bzr5i">Time: <span class="font-mono svelte-8bzr5i">${escape_html(processingTime)} ms</span></span></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <button${attr_class(
    `absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-10 h-full max-h-8 sm:max-h-10 px-2 sm:px-3 sm:py-2 flex items-center rounded-full backdrop-blur-lg text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 transition-all duration-300 ease-in-out ${stringify("bg-green-700/60 dark:bg-green-900/90 hover:bg-green-800/60 dark:hover:bg-green-900/90")}`,
    "svelte-8bzr5i"
  )}>`);
  {
    $$payload.out.push("<!--[!-->");
    {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("start"))}`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
    {
      $$payload.out.push("<!--[!-->");
      {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-orange-50/20 dark:bg-orange-900/10 svelte-8bzr5i"><div class="text-orange-700 text-4xl font-semibold svelte-8bzr5i">${escape_html(store_get($$store_subs ??= {}, "$t", t)("warning"))}</div> <div class="max-w-[50%] text-orange-600 dark:text-orange-400 text-2xl text-center svelte-8bzr5i">${escape_html(store_get($$store_subs ??= {}, "$t", t)("permission_not_granted"))}</div></div>`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--> <div class="absolute bottom-0 right-0 z-10 h-full max-h-12 sm:max-h-18 p-2 sm:p-4 flex items-center gap-1 sm:gap-2 svelte-8bzr5i"><button class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i">`);
  Settings($$payload, { class: "w-4 h-4" });
  $$payload.out.push(`<!----></button> <button class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i">`);
  Languages($$payload, { class: "w-4 h-4" });
  $$payload.out.push(`<!----></button> <select class="h-full px-2 sm:px-3 cursor-pointer rounded-full bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i">`);
  $$payload.select_value = selectedVideoSourceDeviceId;
  $$payload.out.push(`<!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let device = each_array[$$index];
    $$payload.out.push(`<option${attr("value", device.deviceId)}${maybe_selected($$payload, device.deviceId)} class="text-xs sm:text-sm svelte-8bzr5i">${escape_html(device.label)}</option>`);
  }
  $$payload.out.push(`<!--]-->`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select> <button class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i">`);
  {
    $$payload.out.push("<!--[!-->");
    Moon($$payload, { class: "w-4 h-4" });
  }
  $$payload.out.push(`<!--]--></button></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
