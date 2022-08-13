/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GiftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Gift extends SvelteComponentTyped<
  GiftProps,
  {},
  { default: {} }
> {}
