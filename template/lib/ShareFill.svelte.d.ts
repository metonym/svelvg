/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShareFill extends SvelteComponentTyped<
  ShareFillProps,
  {},
  { default: {} }
> {}
