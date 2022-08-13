/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Share extends SvelteComponentTyped<
  ShareProps,
  {},
  { default: {} }
> {}
