/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlipayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Alipay extends SvelteComponentTyped<
  AlipayProps,
  {},
  { default: {} }
> {}
