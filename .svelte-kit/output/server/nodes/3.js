

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CEFn8dB7.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BVikqVVq.js","_app/immutable/chunks/6XM65UVr.js"];
export const stylesheets = [];
export const fonts = [];
