/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface YinYangProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class YinYang extends SvelteComponentTyped<
  YinYangProps,
  {},
  { default: {} }
> {}
