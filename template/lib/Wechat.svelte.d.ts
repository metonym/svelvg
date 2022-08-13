/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WechatProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Wechat extends SvelteComponentTyped<
  WechatProps,
  {},
  { default: {} }
> {}
