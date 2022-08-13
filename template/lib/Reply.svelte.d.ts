/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ReplyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Reply extends SvelteComponentTyped<
  ReplyProps,
  {},
  { default: {} }
> {}
